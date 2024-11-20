# Typescriptの定数リテラル
## この例題について

Typescript言語の定数リテラルについて学習する。
- Ubuntu 24.04 (WSL)
- node v18.19.1
- tsc 5.6.3
- Visual Studio Code 1.95.3

環境の作成に関しては [0010](../0010_install_nodejs/README.md)を参照。

サンプルプログラムを実行するには
```sh
tsc hello.ts && node hello.js
```
を実行する。
## 定数リテラル
Typescriptは大文字と小文字を区別する。したがって、Number型を除くリテラルでは、大文字と小文字が区別される。
### コメント
1行コメントは // で始める。行末までがコメントになる。
```ts
// The presence or absence of comments has no influence 
// on whether a program is legal or illegal.
```
ブロックコメントは /* */ で囲む。

```ts
/*
 Furthermore, comments do not influence the meaning of a program; 
 their sole purpose is the enlightenment of the human reader.
*/
```
### 文字列
文字列リテラルはシングルクオート、ダブルクオート、あるいはバッククオートで囲む。
```ts
console.log('Hello, Typescript!');
console.log("Hello, Typescript!");
console.log(`Hello, Typescript!`);
```
異種のクオートで囲むことで、文字列内にクオートを配置することができる。ただし、同種のクオートのネストはできない。
```ts
console.log(`String with 'single' and "double" quote.`);
console.log('String with "double" and `back` quote.');
console.log("String with `back` and 'single' quote.");
```
同種のクオートでネストする場合は、エスケープ文字を使う。
```ts
console.log('String with \'escape\' character.');
console.log("String with \"escape\" character.");
console.log(`String with \`escape\` character.`);
```

### 数値
数値はNumber型である。Number型は整数と実数を区別しない。Number型はIEEE倍精度浮動小数点数として実装される。なお、指数部を示す'E'は大文字小文字を区別しない。一方で、InfinityとNaNは大文字と小文字を区別する。
```ts
console.log(42);
console.log(-42);
console.log(3.14);
console.log(6.022E-23);
console.log(6.022e-23);
console.log(Infinity);
console.log(NaN);
```
### 論理値
論理値はBoolean型である。trueとfalseが用意されている。
```ts
console.log(true);
console.log(false);
```

### 特殊な値
特殊な値としてnullとundefinedが定義されている。
```ts
console.log(null);
console.log(undefined);
```
