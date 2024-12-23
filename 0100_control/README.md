# 制御構文
## この例題について

Typescript言語の基本的な制御構文について学習する。
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
## 列挙型
Typescriptの列挙型は任意の識別子の集合からひとつのスカラー型を作る。
### 宣言
下の例では列挙型GeekAlphabetを宣言している。GeekAlphabet型変数fooは、alpha, beta, gamma, deltaのうちひとつの値を持つことができる。
```ts
    // enum definition
    enum GreekAlphabet {
        alpha, beta, gamma, delta
    };

    // The enum is type. So, it can be as type annotation. 
    let foo: GreekAlphabet;
```
### 列挙型を使う
列挙型の値のスコープは型名の中に閉じている。したがって、グローバルに値を指定することはできない。また、実行時の値は単なる整数である。
```ts
    // enum value is inside scope of the type. 
    foo = GreekAlphabet.alpha;
    // In the executable code, enum value is represented by number. 
    console.log("foo is ", foo);
```
