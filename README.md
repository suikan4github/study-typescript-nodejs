# study-typescript-nodejs
Typescriptの自習ノートです。私が個人利用のために作ったノートですが、Typescriptをこれから学習したい人の役にたてば幸いです。

このREADME.mdは「ですます調」で書いていますが、個人用ノートであるという理由から他のmarkdownページはすべて「である調」になっています。

# リポジトリの取得後にすること

全ての内容はサブディレクトリに格納されています。Webpackを使用するディレクトリは、コマンドラインから

```sh
npm install
```
によって必要なモジュールを取得してください。その後、

```sh
npm start
```
によってwebpackが実行されます。Typescriptのコンパイルは実行時とソース変更時に自動で行われます。

この説明は、webpackを使用する各ディレクトリのREADME.mdにも書いてあります。
# 参考文献
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [サバイバルTypeScript](https://typescriptbook.jp/)

# オンライン・インタープリタ
Typescriptにはプレイグラウンドと呼ばれるオンライン・インタープリタが多数存在します。これらはTypescriptを学ぶ上で大いに役立ちます。
代表的なものとして[Typescript : TS Playground](https://www.typescriptlang.org/play/?#code/DYUwLgBA9hC8EG8BQFUEMBcEBEAzKU2ANCqgEZYCMATCahAMZbZloBO2SAvgNxKiQGfARAAmfABQJGRMRC5xEETDlYAvYhAoRKABkryAlHwZQAdgGcooAHTAoAcwkNjSU5esg7jiaONA)を挙げておきます。
# 内容

0010を除くと、Webpackを使ったサーバサイドの実行になっています。Webpackはローカルでサーバサイド・アプリケーションを簡単に実行できる枠組みです。

Typescriptで組んだアプリケーションは指定のindex.htmlと組み合わせる形でWebpackにより実行されます。サーバサイド・アプリケーションなので結果を見るにはブラウザが必要です。特に記述が無い限り、結果は [localhost:8080](http://localhost:8080) から見ることができます。

- [0010](0010_install_nodejs/README.md) : node.jsとTypescriptコンパイラの取得
- [0020](0020_install_webpack/README.md) : Webpackのインストール
- [0030](0030_literal/README.md) : Typescriptの定数リテラル
- [0040](0040_variable/README.md) : Typescriptの変数
- [0050](0050_const_literal/README.md) : 定数とリテラル型
- [0060](0060_array/README.md) : 配列型
- [0070](0070_destructuring_assignment/) : 分解代入
- [0080](0080_tupple/README.md) : タプル
- [0090](0090_enum/README.md) : 列挙型
- [0010](0100_control/README.md) : 制御構文
- [0010](0110_function/README.md) : 関数構文

