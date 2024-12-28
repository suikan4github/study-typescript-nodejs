{
    // Object declaration
    let x = { re: 1.414, im: 1.414 };
    x.re = 0.0;
    x.im = 1.0;

    // Object declaration with type annotation. 
    let y: { rad: number, angle: number } = { rad: 1.0, angle: 3.1415 / 4 };

    // Using type alias for the type annotation. 
    type complex = { re: number, im: number };
    let z: complex;
    z.re = 0.0;  // This my cause warning : Variable 'z' is used before being assigned.ts(2454)
    z.im = -1.0;

    z = { re: 0.0, im: -1.0 }; // No warning.

    // Using type alias for the type annotation. 
    let u!: complex;    // Suppress warning. 
    u.re = 0.0;         // No warning
    u.im = -1.0;


    // Destructuring assignment
    let { re, im } = x;

}