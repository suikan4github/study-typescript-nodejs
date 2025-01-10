# 束縛（バインディング）
## この例題について

Typescript言語の名前と実体の束縛について学習する。
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
## バインディングの実際
###　通常の関数とバインディング
関数内の識別子は、変数の実体に対して動的に束縛される。言い換えると、実行時にその関数を読んだ環境の変数の実体に対して束縛される。メソッドの中で使える特別な変数thisがある。クラスメソッド関数の場合、thisはそのクラスのスコープとして解釈される。

以下の例で、doubAtMyClass関数はMyClass型変数xのプロパティdoubleに代入されている。このとき、x.double()を呼び出すと、その呼び出しの中でthisはxのローカルスコープを指す。
```ts
function doubleAtMyClass(): number { return this.value * 2.0 }
let tripleAtMyClass = (): number => this.value * 3.0;

// Object declaration
class MyClass {
    value: number;
    constructor() { this.value = 0.0 };
    double: () => number;
    triple: () => number;
};

let x: MyClass;
x = { value: 1.0, double: doubleAtMyClass, triple: tripleAtMyClass };

```
###　アロー関数とバインディング
アロー関数の中の変数は、変数実体に対して静的に束縛される。つまりコンパイル時に束縛される。特別な変数thisはアロー関数ではグローバル名前空間を指し示す。

この性質から、アロー関数は呼び出しスコープを想定できないコールバック関数に使用される。また、メソッド関数としては適さない。クラスのthis関数は動的束縛であるべきだからである。
