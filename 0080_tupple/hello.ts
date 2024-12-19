{
    // Tuple definition 
    let foo: [Number, String] = [3.14, "Pi"]; // Tuple of number and string. 
    console.log("foo[0] is ", foo[0]);
    console.log("foo[1] is ", foo[1]);

    // Destructive extraction
    let [bar, baz] = foo;
    console.log("bar is ", bar);
    console.log("baz is ", baz);
}