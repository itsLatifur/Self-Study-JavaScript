// video - 11
console.log(typeof h); // number
console.log(typeof i); // string
console.log(typeof f); // object

// strings
let n = "This is 'Single quote'"; // Single quotes inside double quotes
let o = 'This is "Double quote"'; // Double quotes inside single quotes
let p = `This is "Backtick"`; // Backticks
console.log(n);
console.log(o);
console.log(p);

//numbers
let q = 5; // integer
let r = 5.5; // float
let s = 5e3; // 5 * 10^3  = 5 * 1000 = 5000 - scientific notation
let t = 5e-3; // 5 * 10^-3 = 5 * 0.001 = 0.005 - scientific notation
console.log(q);
console.log(r);
console.log(s);
console.log(t);

// Booleans
let u = 5;
let v = 5;
let w = 6;
console.log(u == v); // returns true - checks only the value
console.log(u === v); // returns true - checks the value and the type
console.log(u == w); // returns false
console.log(u === w); // returns false

// Objects
let fighter = {
  name: "Khabib",
  age: 32,
  country: "Russia",
  matches: 29,
  wins: 29,
}; // Creating an object
console.log(fighter); // Printing the object
console.log(fighter.name); // Accessing the properties of the object
console.log(fighter["name"]); // Another way to access the properties of the object
