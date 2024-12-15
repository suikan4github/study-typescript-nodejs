{
    // constant variable
    const one: Number = 1;
    console.log("one is ", one);
    //     one = 2; // assignment to const is error. 
    console.log("Type is", typeof (one));   // Number type. 

    // Numerical Literal Type Definition 
    type OneTwoThree = 1 | 2 | 3;

    let limited_var: OneTwoThree = 1;
    console.log("limited_var is ", limited_var);
    console.log("Type is", typeof (limited_var));   // Number type. 
    //     limited_var = 4; // not allowed. 
    limited_var = 2;
    console.log("limited_var is ", limited_var);

    // String Literal Type Definition 
    type FourFiveSix = "four" | "five" | "six";

    let limited_string: FourFiveSix = "four";
    console.log("limited_string is ", limited_string);
    console.log("Type is", typeof (limited_string));   // Number type. 
    //limited_string = "Four"; // assignment to const is error.
    limited_string = "five";
    console.log("limited_string is ", limited_string);

    // Boolean Literal Type Definition 
    type True = true;

    let limited_boolean: True = true;
    console.log("limited_boolean is ", limited_boolean);
    console.log("Type is", typeof (limited_boolean));   // Boolean type. 
    // limited_boolean = false; // not allowed
    limited_boolean = true;
    console.log("limited_boolean is ", limited_boolean);

    // Numerical Literal Type Definition 

    let easy_limited_var: 1 | 2 = 1;
    console.log("easy_limited_var is ", easy_limited_var);
    console.log("Type is", typeof (easy_limited_var));   // Number type. 
    // easy_limited_var = 4; // not allowed.
    // easy_limited_var = limited_var; // Compile error because the value is 3.
    easy_limited_var = 2;
    console.log("easy_limited_var is ", easy_limited_var);

}