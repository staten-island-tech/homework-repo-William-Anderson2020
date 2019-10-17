let numbers = [1, 2, 3, 4, 5];

//let [one,two] = numbers;
//console.log(one,two); //expected result 1 2;

//let [one, two, ...overTwo] = numbers;
//console.log(overTwo); //expected result [3, 4, 5];

//let [one,, three] = numbers // use extra commas to skip values
//console.log(one,three); //expected result 1, 3

//use [] for arrays and {} for objects

let claude = {
    name: 'Claude',
    age: 19,
    adress: {
        city: 'somewhere',
        street: 'someplace',
    }
}

function howOld({name = 'James', age: num}){ //Can deconstruct objects in function parameters. Must use name of proporty unless being renamed
    console.log(`${name} is ${num} years old.`); //names can be assigned to deconstructed elements (ie, num instead of age). Defaults can be set in case no value is passed in.
}

howOld(claude);

//objects can also be combinded through deconstruction

