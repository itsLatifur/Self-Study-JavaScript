// Video 13
// generally const is used for objects for better performance(unchangeable reference)
const car = {
  name: "White Car",
  model: 500,
  color: "white",
  weight: "850kg",
  start: function () { // function inside an object is called method
    console.log("Car started");
  },
  drive: function () {
    console.log("Car is driving");
  },
  stop: function () {
    console.log("Car stopped");
  },
};

console.log(car); // print the car object
console.log(car.name); // print the name of the car
console.log(car['model']); // Can use this syntax to access the model too
console.log(car.color); // print the color of the car
console.log(car.weight); // print the weight of the car
console.log("Changed the car properties:");
car.name = "Black Car"; // change the name of the car
car.model = 600; // change the model
car.color = "black"; // change the color
car.weight = "900kg"; // change the weight
console.log(car.name); // print the name of the car
console.log(car.model); // print the model of the car
console.log(car.color); // print the color of the car
console.log(car.weight); // print the weight of the car


// Function constructor
console.log("Function constructor :");
function carConstructor(name, model, color, weight) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.weight = weight;
  this.start = function () {
    console.log(name + " started");
  };
  this.drive = function () {
    console.log(name + " is driving");
  };
  this.stop = function () {
    console.log(name + " stopped");
  };
}
const cFiat = new carConstructor("Fiat", "500", "white", "850kg"); // create a new car object
cFiat.start(); // call the start method
cFiat.drive(); // call the drive method
cFiat.stop(); // call the stop method
const cBMW = new carConstructor("BMW", "X5", "black", "1200kg"); // create a new car object
cBMW.start(); // call the start method
cBMW.drive(); // call the drive method
cBMW.stop(); // call the stop method
const cMercedes = new carConstructor("Mercedes", "Benz", "silver", "1500kg"); // create a new car object
cMercedes.start(); // call the start method
cMercedes.drive(); // call the drive method
cMercedes.stop(); // call the stop method
const cTesla = new carConstructor("Tesla", "Model S", "red", "1800kg"); // create a new car object
cTesla.start(); // call the start method
cTesla.drive(); // call the drive method
cTesla.stop(); // call the stop method


