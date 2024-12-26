# ユニオン型
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
## ユニオン型の説明
### 基本的な宣言
ユニオン型は型名を"|"で区切って並べることで宣言できる。 以下の例では変数xはユニオン型であり、数値あるいは文字列の値を持つことができる。論理型の値は持つことができない。
```ts
    // Union is a "union of types"
    let x: number | string;  // x is number or string.
    x = 2.1;
    console.log("Type of x is ", typeof x); // number type.
    console.log("Value of x is ", x);
    x = "2.1";
    console.log("Type of x is ", typeof x); // string type.
    console.log("Value of x is ", x);
    // x = true; // not allowed
```
### 関数の返り値の型
関数の返り値の型は、コンパイラが関数本体のreturn文から推定する。以下の例では関数fの返り値の型は数値型あるいは文字列型である。
```ts
    // Return type is predicted from the return statement. 
    let f = (isNumber: boolean) => {
        if (isNumber)
            return 3.3; // Return as number
        else
            return "3.3"; // Return as number
    }

```
## 関数の返り値の型注釈
関数の返り値の型をコンパイラに推論させると、プログラムのバグによって予期せぬユニオンを使ってしまうことがある。言い換えると、返り値の型のバグを検出できない。そこで返り値の型注釈を行えばこの問題を禁止できる。

以下の例では関数gの返り値の型は数値型または文字列型である。したがってreturn文で論理値を返そうとするとコンパイルエラーになる。
```ts
    // Return type can be annotated. 
    let g = (isNumber: number): number | string => {
        if (isNumber == 1)
            return 3.3; // Return as number
        else if (isNumber == 0)
            return "3.3"; // Return as string
        else
            // return false; // Not allowed
            return 0;
    }
```

