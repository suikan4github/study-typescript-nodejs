# Typescriptの変数
## この例題について

Typescript言語の変数について学習する。
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
## メソッド関数とプロパティ
変数や値はメソッド関数を持つことができる。プリミティブ型の変数および数値も同様である。

以下の例で、leighはプロパティでsliceはメソッド関数である。
```ts
    let string_variable: string = 'My string in variable';
    console.log(string_variable.length);
    console.log(string_variable.slice(7, 15)); // start from 7, end at 15
```

数値型のリテラル定数はピリオド(.)を後ろに付けることができない。そのため、メソッドを呼ぶときには()でくるむ。
```ts
    console.log((99).toString(2));  // primitive value and method.
```