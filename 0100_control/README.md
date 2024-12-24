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
## 基本的な制御構文
Typescriptの基本的な制御構文はC言語に似ている。
### if ~ else
if文はC言語と全く同じと言っていい。実行文が複文のときには{}で囲む。{}の中は独自の名前スコープを確立する。
```ts
    // If statement
    if (Math.PI == near_pi)
        console.log("True!");
    else {
        console.log("False!");
        console.log("Difference is  ", Math.abs(Math.PI - near_pi));
    }
```
### for文他
for文、while文、do ~ while文、switch case文もC言語とほとんど同じである。switch case文がfollow through を起こすこともＣ言語と同じである。
```ts
    // Accessing array in legacy programming style. 
    let array: number[] = [1, 2, 3];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
```
## 先進的なループ構文
あらかじめ範囲が分かっている対象への処理をするために特別なループ構文が憑依されている。
### for ~ of 文
配列のすべての要素を処理するためにfor ~ of 文が用意されている。以下の例でelementの型は配列要素の型であり、値は各々の配列要素の値を順にコピーしていく。
```ts
    let array: number[] = [1, 2, 3];
    // Accessing array in modern programming style. 
    for (const element of array) {
        console.log(element);
    }
```
### for ~ in 文
オブジェクトのすべての要素を処理するためにfor ~ of 文が用意されている。以下の例でkeyの型はString型であり、object[key]の値は各々のオブジェクト要素を順にコピーしていく。
```ts
    // Accessing object to scan its keys. 
    let object = { one: 1, two: "弐", three: "III" };
    for (const key in object) {
        const element = object[key];
        console.log("object.key:value is ", key, ":", element);
    }
```
