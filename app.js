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
        (this.make = make),
            (this.model = model),
            (this.engine = engine),
            (this.year = year),
            (this.price = price);
    }
    sellCar() {
        return `For just $${Math.floor(this.price)}.99 you can buy a ${this.make} ${this.model} ${this.engine}`;
    }
}
let newCar = new Car("VW", "GULF", "V8 Diesel", 2019, 41000);
console.log(newCar.sellCar());
