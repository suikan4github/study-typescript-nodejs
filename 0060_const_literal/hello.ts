{
    // constant variable
    const one: Number = 1;
    console.log("Value is ", one);
    //     one = 2; // assignment to const is error. 
    console.log("Type is", typeof (one));   // Number type. 

    // Literal Type Definition 
    type OneTwoThree = 1 | 2 | 3;

    let limited_var: OneTwoThree = 1;
    console.log("Value is ", limited_var);
    console.log("Type is", typeof (limited_var));   // Number type. 
    //     limited_var = 4; // not allowed. 
    limited_var = 2;
    console.log("Value is ", limited_var);

    // Literal Type Definition 
    type FourFiveSix = "four" | "five" | "six";

    let limited_string: FourFiveSix = "four";
    console.log("Value is ", limited_string);
    console.log("Type is", typeof (limited_string));   // Number type. 
    //limited_string = "Four"; // assignment to const is error.
    limited_string = "five";
    console.log("Value is ", limited_string);

}