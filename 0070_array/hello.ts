{
    // Array definition 
    let foo: Number[]; // Array of number variable. 
    foo = [1, 2, 3, 4]; // Array literal.
    console.log("foo is ", foo);
    console.log("foo[3] is ", foo[3]);

    // Other array definition. 
    let bar: Array<Number>; // Array of number variable.
    bar = [1, 2, 3, 4];
    console.log("bar is ", bar);

    // Array comparison 
    console.log("foo == bar is", foo == bar);

    // Array is reference. 
    let baz = foo;
    foo[3] = 5;
    console.log("foo is ", foo);
    console.log("baz is ", baz); // baz refers contents of foo.

    // Copy the array contents. 
    let qux = [...bar]; // Spread syntax
    bar[3] = 10;
    console.log("bar is ", bar);
    console.log("qux is ", qux); // qux is not referring bar. 

    foo[7] = 7;
    console.log("foo is ", foo);

    // Two dimensional array. 
    let two_dim: Number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(two_dim[0]);
    console.log(two_dim[1]);
    console.log(two_dim[2]);
}