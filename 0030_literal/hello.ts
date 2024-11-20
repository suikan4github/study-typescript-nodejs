// The presence or absence of comments has no influence 
// on whether a program is legal or illegal.

/*
 Furthermore, comments do not influence the meaning of a program; 
 their sole purpose is the enlightenment of the human reader.
*/

// String literal is surrounded by single, double or back quote. 
console.log('Hello, Typescript!');
console.log("Hello, Typescript!");
console.log(`Hello, Typescript!`);

// To use a quote character inside string, surround entire string by other quote. 
console.log(`String with 'single' and "double" quote.`);
console.log('String with "double" and `back` quote.');
console.log("String with `back` and 'single' quote.");

// Or, you can use escape character. 
console.log('String with \'escape\' character.');
console.log("String with \"escape\" character.");
console.log(`String with \`escape\` character.`);

// Number
console.log(42);
console.log(-42);
console.log(3.14);
console.log(6.022E-23);
console.log(6.022e-23);
console.log(Infinity);
console.log(NaN);


// Boolean. The literal is case sensitive. 
console.log(true);
console.log(false);

// Null
console.log(null);

// Undefined
console.log(undefined);


// Big int is available only when the target is ES2020 or later. 
// console.log(123456789012345678901234567890123456789012345678901234567890n);
