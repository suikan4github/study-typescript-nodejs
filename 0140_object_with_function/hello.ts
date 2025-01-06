{
    // Object declaration
    class MyClass {
        value: number;
        constructor() { this.value = 0.0 };
        double: () => number;
        triple: () => number;
    };

    function doubleAtMyClass(): number { return this.value * 2.0 }
    function tripleAtMyClass(): number { return this.value * 3.0 }

    let x: MyClass;

    x = { value: 3.14, double: doubleAtMyClass, triple: tripleAtMyClass };

    console.log("x.double() is ", x.double());
    console.log("x.triple() is ", x.triple());


}