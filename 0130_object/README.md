# オブジェクト型
## この例題について

Typescript言語のオブジェクト型について学習する。
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
## オブジェクト型の説明
###　オブジェクト型の値
オブジェクト型の値を作るにはプロパティ名と値を":"で連結してペアとしたものを並べて"{}"でくるむ。変数のプロパティは"."の後にプロパティ名を指定してアクセスする。
```ts
    // Object declaration
    let x = { re: 1.414, im: 1.414 };
    x.re = 0.0;
    x.im = 1.0;

```
### オブジェクト型
オブジェクト型を表現する場合は、プロパティ名と型名を":"で連結したものを並べて"{}"でくるむ。
```ts
    // Object declaration with type annotation. 
    let y: { rad: number, angle: number } = { rad: 1.0, angle: 3.1415 / 4 };


```
## 型エイリアスによる宣言
オブジェクト型を初期値無しで型注釈を使って宣言する場合、最初はプロパティへの代入で警告が出る。これは、変数全体が一度も初期化されていないからである。

このエラーを抑制したければ、最初に変数を（個々のプロパティではなく）オブジェクト型の値で初期化する。
```ts
    // Using type alias for the type annotation. 
    type complex = { re: number, im: number };
    let z: complex;
    // z.re = 0.0;  // This may cause runtime error  : Variable 'z' is used before being assigned.ts
    // z.im = -1.0;

    z = { re: 0.0, im: -1.0 }; // No warning.
    console.log("z is ", z.re, z.im);
```

## 分割代入
分割代入をする場合、新たにプロパティ名と同じ名前の変数を宣言することになる。こうして作った変数に再度分割代入することはできない。癖のある文法なので注意する。
```ts
    // Destructuring assignment
    let { re, im } = x;
```
## プロパティ名を変数名として消費しない分割代入
```ts
    //Destructuring assignment without property name variable. 
    let { re: a, im: b } = x;
```
