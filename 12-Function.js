// Video 12
function sleep() {
    console.log("Sleeping...");
} // function declaration

sleep(); // function call


// Function expression
const sleep2 = function() {
    console.log("Sleeping...Const");
}; // function 

sleep2(); // function call


// Arrow function
const sleep3 = () => {
    console.log("Sleeping...Arrow");
}; // function expression

sleep3(); // function call


// Function with parameters
function sleep4(name) {
    console.log(name + " is sleeping...");
} // function declaration

sleep4("Xi Xi"); // function call
sleep4("Jhu Jhu");
sleep4("Uncle Choi");


// Function with default parameters
console.log("Function with default parameters :");
function sleep5(name = "Lee") {
    console.log(name + " is sleeping...");
} // function declaration

sleep5(); // function call


// Function with return value
console.log("Function with return value :");
function add(a, b) {
    return a + b; // return statement
}

const sum = add(5, 10); // function call
console.log("Sum: " + sum); // output the sum


// Function with multiple return values
console.log("Function with multiple return values :");
function getFullName(firstName, lastName) {
    return firstName + " " + lastName; // return statement
}
const fullName = getFullName("John", "Doe"); // function call
console.log("Full Name: " + fullName); // output the full name

function sleeping(name, time){
    console.log(name + " is sleeping from " + time + "."); // return statement
}
sleeping("Xi Xi", "10:00 PM"); // function call
sleeping("Jhu Jhu", "11:00 PM"); // function call


// Function with object as parameter
console.log("Function with object as parameter :");
function sleepWithObject(person) {
    console.log(person.name + " is sleeping at " + person.time + "."); // return statement
}
const person = {
    name: "Acya",
    time: "11:30 PM"
}; // object
sleepWithObject(person); // function call

// Function with parameter and return value
console.log("Function with parameter and return value :");
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9; // return statement
}
const celsius = toCelsius(77); // function call
console.log("Celsius: " + celsius); // output the celsius
function toFarehnheit(celsius) {
    return (celsius * 9/5) + 32; // return statement
}
const fahrenheit = toFarehnheit(25); // function call
console.log("Fahrenheit: " + fahrenheit); // output the fahrenheit


// Function with rest parameters
console.log("Function with rest parameters :");
function sumAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number; // add each number to the total
    }
    return total; // return the total
}
const total = sumAll(1, 2, 3, 4, 5); // function call
console.log("Total: " + total); // output the total


// Function with callback
console.log("Function with callback :");
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // call the callback function
}
greet("Jasim", function() {
    console.log("How are you?"); // callback function
}
); // function call


// Function with higher-order function
console.log("Function with higher-order function :");
function higherOrderFunction(callback) {
    callback(); // call the callback function
}
higherOrderFunction(function() {
    console.log("This is a higher-order function!"); // callback function
}
); // function call


// Function with anonymous function
console.log("Function with anonymous function :");
const greet2 = function(name) {
    console.log("Hello, " + name + "!"); // anonymous function
};
greet2("Anonymous"); // function call


// Function with named function
console.log("Function with named function :");
function greet3(name) {
    console.log("Hello, " + name + "!"); // named function
}
greet3("Name"); // function call


// Function with IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE!"); // IIFE
})(); // function call


// Function with closure
console.log("Function with closure :");
function outerFunction() {
    let count = 0; // private variable
    return function innerFunction() {
        count++; // increment the count
        console.log("Count: " + count); // output the count
    };
}
const counter = outerFunction(); // create a closure
counter(); // function call
counter(); // function call
counter(); // function call


// Function with recursion
function factorial(n) {
    if (n === 0) {
        return 1; // base case
    } else {
        return n * factorial(n - 1); // recursive case
    }
}
const result = factorial(5); // function call
console.log("Factorial: " + result); // output the factorial


// Function directly called inside a variable
console.log("Function directly called inside a variable :");
function running2() {
  return "is running"; // Return the string instead of logging
}

function speed2() {
  return "at 20km/h speed"; // Return the string instead of logging
}

function name9() {
  return "Nanako san"; // Return the string instead of logging
}

let useractivity = name9() + " " + running2() + " " + speed2();
console.log(useractivity); // Log the concatenated string