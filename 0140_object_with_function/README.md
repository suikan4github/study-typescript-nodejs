# オブジェクト型と関数
## この例題について

Typescript言語のオブジェクト型と関数について学習する。
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
## オブジェクト型と関数
###　関数を持つオブジェクトの生成
値を持つプロパティ同様にオブジェクトの型（クラス）の関数（メソッド）プロパティを宣言できる。以下の例ではクラスのプロパティに関数型注釈を与えてメソッドとしている。
```ts
    // Object declaration
    class MyClass {
        value: number;
        constructor() { this.value = 0.0 };
        double: () => number;
        triple: () => number;
    };


```
### オブジェクトの値
オブジェクト型の値を表現する場合は、プロパティ名と型名を":"で連結したものを並べて"{}"でくるむ。

以下の例では先に作ったMyClass型に対してオブジェクト型の値を代入している。ここでメソッドの定義はアロー関数ではなくfunctionであることに注意。アロー関数は内部の名前を静的スコープで変数と束縛するため、メソッドとして使うことはできない。メソッド内部での変数の束縛はクラスではなくオブジェクトに対して動的なものだからである（後述）。
```ts
    function doubleAtMyClass(): number { return this.value * 2.0 }
    function tripleAtMyClass(): number { return this.value * 3.0 }

    let x: MyClass;

    x = { value: 3.14, double: doubleAtMyClass, triple: tripleAtMyClass };

    console.log("x.double() is ", x.double());
    console.log("x.triple() is ", x.triple());
```

