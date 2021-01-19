//FUNCTION DEFINTIONS

/*1. Function Declaration: declared function are not executed immediately. 
They are executed when they are invoked.*/
var x = myFunction(5, 3);
document.getElementById("demo1").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}//Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

/*2. Function Expressions: a function expression can be stored in a variable. 
They are always invoked (called) using the variable name.*/
var x = function (a, b) { return a * b };
document.getElementById("demo2").innerHTML = x(7, 8);

/*THE ARGUMENT OBJECT - JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).*/

/*1. Use the arguments object to find the highest value in a list of number.*/
document.getElementById("demo3").innerHTML = findMax(1, 123, 50, 115, 44, 88);

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
/*2. Use the arguments object to create a function to sum all input value.*/
document.getElementById("demo4").innerHTML = sumAll(1, 123, 50, 115, 44, 88);

function sumAll() {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

//FUNCTION INVOCATION
/*1. Invoking a Function as a Method*/
var myMe = {
    firstName: "Linda",
    lastName: "Scarano",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById("demo5").innerHTML = myMe.fullName();
/*2. Invoking a Function with a Function Constructor*/
/*A constructor invocation creates a new object. 
The new object inherits the properties and methods from its constructor.*/
var x = new myFun("Andrea", "Accetta")
document.getElementById("demo6").innerHTML = x.firstName + " " + x.lastName;

function myFun(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

//FUNCTION call()
//1. The JavaScript call() Method
var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "Linda",
    lastName: "Scarano"
}
var person2 = {
    firstName: "Andrea",
    lastName: "Accetta"
}
var x = person.fullName.call(person1);
var y = person.fullName.call(person2);
document.getElementById("demo7").innerHTML = x + " " + y;
//2. The call() Method with Arguments
var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "Linda",
    lastName: "Scarano"
}
var person2 = {
    firstName: "Andrea",
    lastName: "Accetta"
}
var x = person.fullName.call(person2, "Catania", "Italia")
document.getElementById("demo8").innerHTML = x;

//FUNCTION apply()
//With the apply() method, you can write a method that can be used on different objects.
/*
The Difference Between call() and apply():
 - The call() method takes arguments separately.
 - The apply() method takes arguments as an array.
*/
//1. The JavaScript apply() Method
var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "Martina",
    lastName: "Scarano"
}
var x = person.fullName.apply(person1);
document.getElementById("demo9").innerHTML = x;
document.getElementById("demo10").innerHTML = x[0];//The apply() method takes arguments as an array.
//2. The apply() method accepts arguments in an array
var person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "Andrea",
    lastName: "Accetta"
}
var x = person.fullName.apply(person1, ["Dublino", "Irlanda"]); //The apply() method accepts arguments in an array
document.getElementById("demo11").innerHTML = x;
//3. Use apply() method to retun the highest number in an array:
document.getElementById("demo12").innerHTML = Math.max.apply(" ", [34, 56, 21]);

//A COUNTER DILEMMA
var add = (function () {
    var counter = 0;
    return function () { counter += 1; return counter; }
})();

function myCount() {
    document.getElementById("demo13").innerHTML = add();
}




