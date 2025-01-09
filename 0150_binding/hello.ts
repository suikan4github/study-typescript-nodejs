"use strict";

declare var value: number;
this.value = 10.0;

function doubleAtMyClass(): number { return this.value * 2.0 }
let tripleAtMyClass = (): number => this.value * 3.0;

// Object declaration
class MyClass {
    value: number;
    constructor() { this.value = 0.0 };
    double: () => number;
    triple: () => number;
};


{
    let x: MyClass;
    x = { value: 1.0, double: doubleAtMyClass, triple: tripleAtMyClass };

    console.log("x.double() is ", x.double());
    console.log("x.triple() is ", x.triple());
};

