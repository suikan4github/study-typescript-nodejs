# node.jsとTypescriptコンパイラの取得
## この例題について

Typescriptによるプログラムのコマンドライン実行について学習する。
- Ubuntu 24.04 (WSL)
- node v18.19.1
- npm 9.2.0
- tsc 5.6.3
- Visual Studio Code 1.95.3

[TypeScriptチュートリアル -環境構築編-](https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103)の内容をほぼそのままコピーした。

## 作業手順

最初にnode.jsとnpmを取得する。node.jsはJavascriptのサーバサイド実行フレームワーク。npmはnode.jsのパッケージマネージャ
```sh
sudo apt install nodejs npm
```
npmのバージョンを表示する。
```sh
npm -v
```
次にTypescriptコンパイラを取得する。-gオプションは取得したコンパイラをグローバルに（プロジェクトの外からでも）実行できることを指定する。今回はコマンドライン実行なので-gを使わないとパスの設定などが面倒になる。
```sh
sudo npm install -g typescript
```
Typescriptコンパイラのバージョンを表示する。
```sh
tsc -v
```
サンプルプログラム。[TypeScriptチュートリアル -環境構築編-](https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103)のものをそのまま使う。
```ts:hello.ts
const message:string = 'Hello! TypeScript!';
console.log(message);
```
サンプルプログラムのコンパイル。コンパイル結果はhello.jsにJavascriptソースとして出力される。hello.jsはテキストファイルなので人間にとって可読である。
```sh
tsc hello.ts
```
サンプルプログラムの実行。実行ファイルはhello.jsそのものであることに注意。Javascriptはインタープリタ言語である。
```sh
node hello.js
```
