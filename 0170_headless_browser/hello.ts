import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import puppeteer from 'puppeteer';

interface FetchedData {
    pinyin: string;
}

async function fetchPinyin(hanzi: string, fetchedData: FetchedData) {
    const url = "https://hanyu.baidu.com/hanyu-page/zici/s?wd=" + hanzi;

    // ヘッドレスブラウザでアクセス
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        // ページにアクセス
        await page.goto(url, { waitUntil: 'networkidle2' });

        await page.waitForSelector('#item-0', { timeout: 5000 });
        // ピンインの要素を取得（セレクタは実際のページ構造に合わせて調整が必要）
        const pinyinElement = await page.$eval('#edu-tabs-wrapper-bar #item-0',
            (element) => element.textContent?.trim() || ''
        );

        
        fetchedData.pinyin = pinyinElement;

    } catch (error) {
        console.error('ピンイン取得エラー:', error);
        fetchedData.pinyin = '';
    } finally {
        await browser.close();
    }
}

// 使い方例
(async () => {
    let receivedData: FetchedData = { pinyin: "" };
    await fetchPinyin("了", receivedData).catch(console.error);
    console.log(`取得したピンイン: ${receivedData.pinyin}`);
})();
