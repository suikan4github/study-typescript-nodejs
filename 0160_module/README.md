# モジュール
## この例題について

Typescript言語のモジュールについて学習する。
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
## モジュール
TypesScriptのファイルのうち、import文やexport文を使って識別子の輸入、輸出を行うものをモジュールと呼ぶ。

モジュールは常にstrictモードで動くため、"use strict"は書いても書かなくても同じである。

###　識別子の公開
識別子の宣言時にexportを付けると、その識別子を他のモジュールに公開できる。

以下はサンプルファイルworld.tsの中身である。
```ts
"use strict";

export let world: string = "mine";
```

このファイルでは文字列型変数worldを宣言して初期化し、外部に公開している。言い換えると、world.tsはモジュールである。
## 公開された名前の利用
モジュールから公開された識別子は、import文を使うことで利用できる。以下はhello.tsの中身である。

```ts
"use strict";

import * as the from "./world.js"

console.log("The world is ", the.world);
```

このモジュールは、world.jsを読み込んでいることに注意。world.jsは存在しないので、TypeScriptコンパイラが自動的にworld.tsをコンパイルしてworld.jsを生成する。

world.jsの中のすべての公開された識別子が取り込まれ、名前空間"the"の下におかれている。

importの形式にはバリエーションが多いが、取り込んだ名前を明示的に名前空間の下に置く方法は名前の衝突がなく安全である。
