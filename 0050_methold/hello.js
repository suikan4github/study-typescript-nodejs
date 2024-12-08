{
    // String variable
    var string_variable = 'My string in variable';
    // Length property.
    console.log(string_variable.length);
    console.log(string_variable.slice(7, 15)); // start from 7, end at 15
    console.log(string_variable.slice(7)); // end parameter can be skipped. 
    console.log(string_variable.slice()); // start parameter can be skipped
    console.log("The quick brown fox jumps over the lazy dog".slice(7, 15)); // start from 7, end at 15
    // String variable
    var number_variable = 89;
    // Length property.
    console.log(number_variable);
    console.log(number_variable.toString(2)); // radix 2.
    console.log((99).toString(2)); // primitive value and method.
}
