{
    // Object declaration
    let x = {
        re: 0.0, im: 0.0,
        eigen: function () { this.re = 1.0; this.im = 0.0 }
    };
    x.eigen();

    // Create new object from an existing one. 
    let y = Object.create(x);
    y.i = function () { this.re = 0.0; this.im = 1.0 };

    y.i();

    console.log("x is ", x.re, x.im);
    console.log("y is ", y.re, y.im);

}