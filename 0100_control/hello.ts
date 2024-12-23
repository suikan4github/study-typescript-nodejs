{
    let near_pi = 355 / 113;

    // If statement
    if (Math.PI == near_pi)
        console.log("True!");
    else {
        console.log("False!");
        console.log("Difference is  ", Math.abs(Math.PI - near_pi));
    }

    // Accessing array in legacy programming style. 
    let array: number[] = [1, 2, 3];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }

    // Accessing array in modern programming style. 
    for (const element of array) {
        console.log(element);
    }

    // Accessing object to scan its keys. 
    let object = { one: 1, two: 2, three: 3 };
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(element);

        }
    }
}