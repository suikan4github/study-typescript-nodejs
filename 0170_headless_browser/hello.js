"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
// ブラウザインスタンスを一度だけ起動する
let browser = null;
async function fetchPinyin(hanzi, fetchedData) {
    if (!browser) {
        browser = await puppeteer_1.default.launch({ headless: true });
    }
    const page = await browser.newPage();
    const url = "https://hanyu.baidu.com/hanyu-page/zici/s?wd=" + hanzi;
    try {
        await page.goto(url, { waitUntil: 'networkidle2' });
        await page.waitForSelector('.pinyin-text', { timeout: 5000 });
        const pinyinElement = await page.$eval('.pinyin-text', (element) => element.textContent?.trim() || '');
        fetchedData.pinyin = pinyinElement;
    }
    catch (error) {
        console.error(`ピンイン取得エラー (${hanzi}):`, error);
        fetchedData.pinyin = '';
    }
    finally {
        // ページを閉じる（ブラウザは開いたまま）
        await page.close();
    }
}
// 使い方例
(async () => {
    let receivedData = { pinyin: "" };
    // 複数の漢字を処理する場合
    const hanziList = ["了", "你", "好"];
    for (const hanzi of hanziList) {
        await fetchPinyin(hanzi, receivedData).catch(console.error);
        console.log(`取得したピンイン: ${receivedData.pinyin}`);
    }
    // 全ての処理が完了したらブラウザを閉じる
    if (browser !== null) {
        await browser.close();
    }
})();
