{
    // Usual function definition.
    function add(a: number, b: number) {
        return (a + b);
    }
    console.log(add(2, 3));

    // Function definition with return type.
    function sub(a: number, b: number): number {
        return (a - b);
    }
    console.log(sub(2, 3));

    // Arrow function. 
    const mul = (a: number, b: number) => { return (a * b) };
    console.log(mul(2, 3));

    // Function type. 
    type func = (a: number, b: number) => number; // Function type declaration. 
    let div: func = (a, b) => { return a / b }; // Declaration with type name.
    console.log(div(2, 3));
}