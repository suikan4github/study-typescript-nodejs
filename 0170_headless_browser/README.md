# ヘッドレス・ブラウザ
## この例題について

Typescript言語でのヘッドレス・ブラウザの利用について理解する。
- Ubuntu 24.04 (WSL)
- node v18.19.1
- tsc 5.6.3
- Visual Studio Code 1.95.3

環境の作成に関しては [0010](../0010_install_nodejs/README.md) を参照。
## ヘッドレス・ブラウザのインストール
```sh
npm install puppeteer
npm install -D @types/puppeteer
```
## サンプルプログラムの実行
コマンドラインから
```sh
tsc  && node hello.js
```
を実行する。
## オブジェクト型と関数
###　関数を持つオブジェクトの生成
