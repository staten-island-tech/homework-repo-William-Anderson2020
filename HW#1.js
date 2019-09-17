/* Hw#1 */
let x = 2 + "2"; /// console.log(x) = 22. Displays 2, then adds string of 2
let y = 2 + 2 + "2"; /// console.log(y) = 42. The first two are numbers which are added, then string of 2 is added to end
let z = 2 + true; /// console.log(z) = 3. True = 1, False = 0
let xx = 2 + true + "2"; /// console.log(xx) = 32. Number + Boolean to Sting + String
let xy = true + "2"; /// console.log(xy) = true2 (Boolean to String is easier than boolean to number)
let xz = Number("Hello"); /// console.log(xz) = NaN (Not a number) String cannot be converted to number
let yx = Boolean(5); /// Boolean conversion is always true unless 0
let yy = Boolean("Hello"); /// String to Boolean is always true unless string is empty (Null and undefined are also false)
if(yz){} /// Will check if yz is an empty string, false, 0, undefined, or null. Only works for primitive tags

/* Hw#2 */
function greet(firstName = 'John', lastName = 'Doe'){ //Lists defaults if a value is undefined.
    return `Hello ${firstName + lastName}.`;
}

console.log(greet(Simon)); // Returns Simon Doe. Input first name, default last.

let square = function(x){ //annonymous functions take on the name of the variable. ie, square();
    return x*x;
};

console.log(square(8));

(function(){ // IFFE: Immidiatley invokable function expression. Annon function within parenthesis (argument modifier goes at the end)
    console.log('IFFE');
})();

// Function within object is a method

let todo = {
    add: function(){
        console.log('add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function(){ //Can be added outside of variable as well.
    console.log('delete todo')
}

todo.add();
todo.edit(22);