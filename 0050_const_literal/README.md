# Typescriptの定数とリテラル型
## この例題について

Typescript言語のconstとリテラル型について学習する。
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
## 定数
変数宣言をletではなくconstで行うと、定数が定義される。定数は常に同じ値を持つ変数である。定数に値を再代入することはできない。
```ts
    // constant variable
    const one: Number = 1;
    console.log("one is ", one);
    //     one = 2; // assignment to const is error. 
    console.log("Type is", typeof (one));   // Number type. 
```

## リテラル型
Typescriptのリテラル型は、すでに存在する型のサブタイプを宣言する。

### 数値のリテラル型
以下の例のOneTwoThreeは、数値型を基とするリテラル型である。リテラル型の型情報は元となった型である。

```ts
    // Numerical Literal Type Definition 
    type OneTwoThree = 1 | 2 | 3;

    let limited_var: OneTwoThree = 1;
    console.log("limited_var is ", limited_var);
    console.log("Type is", typeof (limited_var));   // Number type. 
    //     limited_var = 4; // not allowed. 
    limited_var = 2;
    console.log("limited_var is ", limited_var);

```
### 文字列のリテラル型
文字列からもリテラル型を作ることができる。
```ts
    // String Literal Type Definition 
    type FourFiveSix = "four" | "five" | "six";

    let limited_string: FourFiveSix = "four";
    console.log("limited_string is ", limited_string);
    console.log("Type is", typeof (limited_string));   // Number type. 
    //limited_string = "Four"; // assignment to const is error.
    limited_string = "five";
    console.log("limited_string is ", limited_string);
```
### 論理型のリテラル型

```ts
    // Boolean Literal Type Definition 
    type True = true;

    let limited_boolean: True = true;
    console.log("limited_boolean is ", limited_boolean);
    console.log("Type is", typeof (limited_boolean));   // Boolean type. 
    // limited_boolean = false; // not allowed
    limited_boolean = true;
    console.log("limited_boolean is ", limited_boolean);
```
## 型名をつけずにリテラル型を使う

上の例では型名をつけてリテラル型を使用したが、1度しか使わないような場合には型名をつけずに型注釈としてリテラル型を宣言できる。

以下の例ではeasy_limited_varは1あるいは2の値しかとらない。
```ts
    // Numerical Literal Type Definition 
    let easy_limited_var: 1 | 2 = 1;
    console.log("easy_limited_var is ", easy_limited_var);
    console.log("Type is", typeof (easy_limited_var));   // Number type. 
    // easy_limited_var = 4; // not allowed.
    // easy_limited_var = limited_var; // Compile error because the value is 3.
    easy_limited_var = 2;
    console.log("easy_limited_var is ", easy_limited_var);
```