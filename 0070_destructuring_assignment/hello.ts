{
    // Array definition 
    let foo: Number[]; // Array of number variable. 
    foo = [0, 1, 2, 3, 4, 5]; // Array literal.
    // Extract from first element
    let [zero, one, two] = foo;
    console.log("zero is ", zero);
    console.log("one is ", one);
    console.log("two is ", two);

    // Extract from middle
    let [, beta, , delta] = foo;
    console.log("beta is ", beta);
    console.log("delta is ", delta);

    // Extract the rest
    let [head, ...tail] = foo;
    console.log("head is ", head);
    console.log("tail is ", tail);

}