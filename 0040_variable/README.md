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
## 変数
Typescriptは大文字と小文字を区別する。したがって、変数名である識別子は、大文字と小文字が区別される。
### 変数宣言
変数宣言は "let 変数名 [':' 型注釈]['=' 初期値]" の文法を持つ。初期値は省略可能で、その場合はundefinedが初期値になる。初期値の有無にかかわらず、型注釈をつけて型を明示できる。初期値がある場合にはコンパイラが型推論を行うため、型注釈は不要である。

型注釈も初期値もない場合には変数の型はanyになる。any型変数についてはコンパイラは型チェックを行わない。
```ts
let foo: string = 'My string in variable';
let bar = 'Sting variable with type predication';
let baz: string;
let qux;
```

### 代入
宣言した変数には値を再代入できる。変数の型に一致しない代入はコンパイル・エラーを起こす

```ts
// Number variable
let number_variable = 3.14;
// Assignment to variable
number_variable = 2.718;
console.log(number_variable);

```
### 定数
letではなくconstを使うと、定数宣言になる。定数には再代入できない。
```ts
const one = 1;
```
### varによる変数宣言は使わない
letではなくvarを使って変数宣言をすることはできる。ただし、この変数はブロック・スコープではなく関数スコープであるため、現代的なプログラミング言語の感覚とマッチしない。

varはECMAScript 2015(ES6)より非推奨となっており、これから学ぶ必要はない。

```ts
var number_variable3 = 3;
```
