// video - 1
console.log("Hello"); //Testing things out

// video - 7
if (true) {
  let x = 6;
  console.log(x);
}

console.log(x); // Cannot access x outside of the block

// video - 8
let a = 5;
a = 6; // Can reassign the value of a
console.log(a);

const b = 7;
b = 8; // Cannot reassign the value of b
b=b+5; // Cannot reassign the value of b
console.log(b);

// video - 8
const c = [1, 2, 3]; // In case of arrays, we can push elements into the array
c.push(4);
console.log(c);

const f = ["Bangladesh", "India", "Pakistan"]; // In case of arrays, we can change the elements of the array
f[1] = "USA"; // Changing the 2nd element of the array as count starts from 0
console.log(f);

const d = {name: "Khabib"}; // In case of objects, we can change the properties of the object
d.name = "Islam"; // Changing the name property of the object
console.log(d);

// Reason why we can change values of arrays and objects but not reassign them is because in case of arrays and objects, the values are not constant but the reference to the values are constant. Means reference to the values are stored in the memory and we can change the values of the memory but we cannot change the reference to the memory.

// video - 9 and 10
let e = 5**2; // means 5^2
console.log(e);

let g = 10;
g **= 2; // means g = g^2
console.log(g);

let text1 = "Hello";
let text2 = "World";
console.log(text1 + " " + text2); // Concatenation of strings

let h = 5+5; // Addition
let i = "5" + 5; // Concatenation
let j = "Hello" + 5; // Concatenation
let m = 10 + "Hello" + 5 + 5; // Concatenation
console.log(h);
console.log(i);
console.log(j);
console.log(m);

// && - AND operator
// || - OR operator
// ! - NOT operator
let k = true;
let l = false;
console.log(k && l); // false
console.log(k || l); // true
console.log(!k); // false

// video - 11
console.log( typeof h); // number
console.log( typeof i); // string
console.log( typeof f); // object

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
let fighter = {name: "Khabib", age: 32, country: "Russia", matches: 29, wins: 29}; // Creating an object
console.log(fighter); // Printing the object
console.log(fighter.name);  // Accessing the properties of the object
console.log(fighter["name"]); // Another way to access the properties of the object
