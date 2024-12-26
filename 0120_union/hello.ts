{
    // Union is a "union of types"
    let x: number | string;  // x is number or string.
    x = 2.1;
    console.log("Type of x is ", typeof x); // number type.
    console.log("Value of x is ", x);
    x = "2.1";
    console.log("Type of x is ", typeof x); // string type.
    console.log("Value of x is ", x);
    // x = true; // not allowed

    // Return type is predicted from the return statement. 
    let f = (isNumber: boolean) => {
        if (isNumber)
            return 3.3; // Return as number
        else
            return "3.3"; // Return as number
    }

    x = f(true);
    console.log("Type of x is ", typeof x); // number type.
    console.log("Value of x is ", x);
    x = f(false);
    console.log("Type of x is ", typeof x); // string type.
    console.log("Value of x is ", x);

    // Return type can be annotated. 
    let g = (isNumber: number): number | string => {
        if (isNumber == 1)
            return 3.3; // Return as number
        else if (isNumber == 0)
            return "3.3"; // Return as string
        else
            // return false; // Not allowed
            return 0;
    }


}