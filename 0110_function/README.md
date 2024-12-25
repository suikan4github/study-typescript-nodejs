# 関数
## この例題について

Typescript言語の基本的な関数について学習する。
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
## 基本的な関数の構文
Typescriptの基本的な関数構文は以下の通り。
### 普通の定義
キーワードfunctionを使った関数定義。返り値の肩はreturn式の型から推論する。2か所あるreturnの型が違う場合には、ユニオン型になる。
```ts
    // Usual function definition.
    function add(a: number, b: number) {
        return (a + b);
    }
    console.log(add(2, 3));
```
### 返り値の型注釈
返り値に型注釈をつけることができる。この場合、2か所あるreturn式の型が違う場合、エラーになる。
```ts
    // Function definition with return type.
    function sub(a: number, b: number): number {
        return (a - b);
    }
    console.log(sub(2, 3));
```
## アロー関数
アロー関数は関数名を使わずシグネチャとボディだけで関数を記述する。アロー関数の値は関数そのものであり、letやconstを使って定数や変数に代入することができる。
```ts
    // Arrow function. 
    const mul = (a: number, b: number) => { return (a * b) };
    console.log(mul(2, 3));
```

### 関数型
アロー関数で宣言する関数のシグネチャ部は型として機能する。以下の例ではfuncという型エイリアスで関数のシグネチャを代表させている。func型の関数を使う時にはシグネチャに型アノーテンションを使う必要はない。
```ts
    // Function type. 
    type func = (a: number, b: number) => number; // Function type declaration. 
    let div: func = (a, b) => { return a / b }; // Declaration with type name.
    console.log(div(2, 3));
```
