"use strict";
let calcSum = (first, second, third) => {
    const concat = first + second;
    console.log(concat);
    return concat;
};
calcSum("hello", 2);
// Primitive Types
let aString;
let aNum;
let aBool;
let anyVar;
let aYear;
aYear = "2021";
const parsedYear = parseInt(aYear);
// Reference Types
let arrString = ["1", "2", "3", "4"];
let arrNum = [1, 2, 3];
let arrBool = [true, false];
let arrMix = [true, "hi", 5];
// Tuple: When we only want to allow certain type in certain indexes of the array
let arrTup = [true, "isaac"];
let arrObj = [
    { id: 1, title: "Boss" },
    { id: 2, title: "Manager" },
    { id: 3, title: "Associate" },
];
// Objects
let person = {
    name: "Jesse",
    age: 2,
};
let year;
// Function
const getSum = (a, b, c) => {
    return a + b;
};
getSum(1, 2);
let calcMultiply;
calcMultiply = (a, b) => {
    return a * b;
};
// Void
const sayHi = () => {
    console.log("hello");
    //   return void;
};
let myCar = {
    make: "Ram",
    model: "1500",
    engine: "V8 EcoDiesel",
    year: 2016,
    price: 40000,
};
class Car {
    constructor(make, model, engine, year, price) {
        this.make = make;
        this.model = model;
        this.engine = engine;
        this.year = year;
        this.price = price;
    }
    sellCar() {
        return `For just $${Math.floor(this.price)}.99 you can buy a ${this.make} ${this.model} ${this.engine}`;
    }
}
// let newCar = new Car("VW", "GULF", "V8 Diesel", 2019, 40_000);
// console.log(newCar.);
// adding access modifiers
// DOM Manipulation and Type Casting
const inputMake = document.querySelector("#make");
const inputModel = document.querySelector("#model");
const inputEngine = document.querySelector("#engine");
const inputYear = document.querySelector("#year");
const inputPrice = document.querySelector("#price");
const inputForm = document.querySelector("form");
const niceRideDiv = document.querySelector(".niceRide");
// adding an event listener on the form so we can setting the New car element manually we will set it
inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newCar = new Car(inputMake.value, inputModel.value, inputEngine.value, inputYear.valueAsNumber, inputPrice.valueAsNumber);
    niceRideDiv.innerText = newCar.sellCar();
    inputForm.reset();
});
// Generics
// - There may be instances where I will not know what types something will be
function doSomething(arg) {
    // do something
    return arg;
}
doSomething("5");
const aBook = {
    id: 3,
    name: "title 1",
    data: [1, 2, 3],
};
var MotorcycleManufactures;
(function (MotorcycleManufactures) {
    MotorcycleManufactures[MotorcycleManufactures["Harley Davidson"] = 0] = "Harley Davidson";
    MotorcycleManufactures[MotorcycleManufactures["Ducati"] = 1] = "Ducati";
    MotorcycleManufactures[MotorcycleManufactures["BMW"] = 2] = "BMW";
    MotorcycleManufactures[MotorcycleManufactures["West Coast Chopper"] = 3] = "West Coast Chopper";
})(MotorcycleManufactures || (MotorcycleManufactures = {}));
const myMotorCycle = {
    year: 1998,
    make: MotorcycleManufactures["Harley Davidson"],
};
console.log(myMotorCycle.make);
