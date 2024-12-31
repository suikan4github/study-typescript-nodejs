{
    // Object declaration
    let x = { re: 1.414, im: 1.414 };
    x.re = 0.0;
    x.im = 1.0;
    console.log("x is ", x.re, x.im);

    // Object declaration with type annotation. 
    let y: { rad: number, angle: number } = { rad: 1.0, angle: 3.1415 / 4 };
    console.log("y is ", y.rad, y.angle);

    // Using type alias for the type annotation. 
    type complex = { re: number, im: number };
    let z: complex;
    // z.re = 0.0;  // This may cause runtime error  : Variable 'z' is used before being assigned.ts
    // z.im = -1.0;

    z = { re: 0.0, im: -1.0 }; // No warning.
    console.log("z is ", z.re, z.im);


    // Destructuring assignment
    let { re, im } = x;

    //Destructuring assignment without property name variable. 
    let { re: a, im: b } = x;

}