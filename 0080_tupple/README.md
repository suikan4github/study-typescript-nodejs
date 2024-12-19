# タプル
## この例題について

Typescript言語のタプルについて学習する。
- Ubuntu 24.04 (WSL)
- node v18.19.1
- tsc 5.6.3
- Visual Studio Code 1.95.3

環境の作成に関しては [0010](../0010_install_nodejs/README.md) を参照。
## サンプルプログラムの実行
コマンドラインから
```sh
tsc hello.ts && node hello.js
```
を実行する。
## タプル
タプルは異なる型の値をくみわせて作る複合的な型である。PascalのrecordやCのstructに似ているが、要素へのアクセスは0基準の添え字のみであり、フィールド名によるアクセスはできない。また、タプルは配列と異なり固定長である。
### 宣言
下の例ではタプルfooを宣言して初期化している。タプルの型注釈は[型名、型名…]であり、タプル型のリテラルは[値、値…]である。
```ts
    // Tuple definition 
    let foo: [Number, String] = [3.14, "Pi"]; // Tuple of number and string. 
    console.log("foo[0] is ", foo[0]);
    console.log("foo[1] is ", foo[1]);
```
### 分割代入
タプルも分割代入が可能である。
```ts
    // Destructive extraction
    let [bar, baz] = foo;
    console.log("bar is ", bar);
    console.log("baz is ", baz);

```
### 残余要素の抽出
残りの要素をまとめて抽出する場合は、...構文を使うことができる。
```ts
    // Extract the rest
    let [head, ...tail] = foo;
    console.log("head is ", head);
    console.log("tail is ", tail);

```
