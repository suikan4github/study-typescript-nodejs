# Typescriptの配列
## この例題について

Typescript言語の配列型について学習する。
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
## 配列
配列型は要素型名[]か、Array<要素型名>で宣言することができる。いずれの方法で宣言しても同じである。配列型のリテラルは[要素, 要素, ... ]で記述できる。配列の要素は変数名[要素の位置]でアクセスできる。要素の位置は0オリジンである。
```ts
    // Array definition 
    let foo: Number[]; // Array of number variable. 
    foo = [1, 2, 3, 4]; // Array literal.
    console.log("foo is ", foo);
    console.log("foo[3] is ", foo[3]);

    // Other array definition. 
    let bar: Array<Number>; // Array of number variable.
    bar = [1, 2, 3, 4];
    console.log("bar is ", bar); 
```


### 配列の比較
Typescriptでは配列名は配列実体への参照として扱われる。そのため、==演算子で二つの配列を比較しても、要素の同値を調べることにはならない。
以下の例は常にfalseである。
```ts
    // Array comparison 
    console.log("foo == bar is", foo == bar);

```
### 配列の代入
配列名は実体への参照であるため、変数に他の配列を代入しても実際に代入されるのは配列への参照である。したがって、以下でbazへのfooの代入を行っているが、この場合はbazもfooも同じ配列実態を指し示しており、片方から実体を書き換えると他方へも影響が及ぶ。
```ts
    // Array is reference. 
    let baz = foo;
    foo[3] = 5;
    console.log("foo is ", foo);
    console.log("baz is ", baz); // baz refers contents of foo.

```
### 配列要素のコピー
配列の要素をコピーして代入するには、スプレッド構文を用いる。
```ts
    // Copy the array contents. 
    let qux = [...bar]; // Spread syntax
    bar[3] = 10;
    console.log("bar is ", bar);
    console.log("qux is ", qux); // qux is not referring bar. 

```

### 疎配列
Typescriptは疎配列を許す。現在の配列の添え字の外に値を書き込むと、途中はemptyとして扱われる。以下の例ではfooは当初添え字0,1,2,3に値を持っている。添え字7への代入で、添え時4,5,6に対応する要素はemptyになる。
```ts
    foo[7] = 7;
    console.log("foo is ", foo);

```
## 2次元配列
Typescriptは2次元配列を取り扱うこともできる。同じ方法で他次元配列も取り扱うことができる。
```ts
    // Two dimensional array. 
    let two_dim: Number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(two_dim[0]);
```
