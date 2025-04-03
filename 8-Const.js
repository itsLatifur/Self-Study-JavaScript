// video - 8
let a = 5;
a = 6; // Can reassign the value of a
console.log(a);

const b = 7;
b = 8; // Cannot reassign the value of b
b=b+5; // Cannot reassign the value of b
console.log(b);

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
