# 分割代入
## この例題について

Typescript言語の配列分割代入について学習する。
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
## 分割代入
分割代入は配列に対する操作である。分割代入を使うことで配列を要素に分解して別々の変数に代入できる。
### 基本的な分割代入
下の例では配列fooを分割（分解）して、要素を変数zero, one, twoに代入している。この場合、zero, one twoの型はfooの要素の型になる。
```ts
    // Array definition 
    let foo: Number[]; // Array of number variable. 
    foo = [0, 1, 2, 3, 4, 5]; // Array literal.
    // Extract from first element
    let [zero, one, two] = foo;
    console.log("zero is ", zero);
    console.log("one is ", one);
    console.log("two is ", two);
```
分割代入は特に指定の無い限り先頭要素から代入される。

変数の数が配列サイズよりも少ない場合、残りの要素は無視される。

変数の数が配列サイズよりも多い場合、対応要素の無い変数の値はundefinedになる。
### 不連続な分割代入
先頭から連続的な要素の値を取り出す必要がない場合には、不要な要素を','によってスキップできる。
```ts
    // discontinuous extraction
    let [, beta, , delta] = foo;
    console.log("beta is ", beta);
    console.log("delta is ", delta);

```
### 残余要素の抽出
残りの要素をまとめて抽出する場合は、...構文を使うことができる。
```ts
    // Extract the rest
    let [head, ...tail] = foo;
    console.log("head is ", head);
    console.log("tail is ", tail);

```
