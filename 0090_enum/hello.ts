{
    // enum definition
    enum GreekAlphabet {
        alpha, beta, gamma, delta
    };

    // The enum is type. So, it can be as type annotation. 
    let foo: GreekAlphabet;
    // enum value is inside scope of the type. 
    foo = GreekAlphabet.alpha;
    // In the executable code, enum value is represented by number. 
    console.log("foo is ", foo);
}