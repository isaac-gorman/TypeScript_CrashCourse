let calcSum = (first: string, second: number, third?: number) => {
  const concat: string = first + second;
  console.log(concat);
  return concat;
};

calcSum("hello", 2);

// Primitive Types
let aString: string;
let aNum: number;
let aBool: boolean;
let anyVar: any;
let aYear: string | number;

aYear = "2021";
const parsedYear: number = parseInt(aYear);

// Reference Types
let arrString: string[] = ["1", "2", "3", "4"];
let arrNum: number[] = [1, 2, 3];
let arrBool: boolean[] = [true, false];
let arrMix: (boolean | string | number)[] = [true, "hi", 5];

// Tuple: When we only want to allow certain type in certain indexes of the array
let arrTup: [boolean, string] = [true, "isaac"];

let arrObj: { id: number; title: string }[] = [
  { id: 1, title: "Boss" },
  { id: 2, title: "Manager" },
  { id: 3, title: "Associate" },
];

// Objects
let person: { name: string; age: number } = {
  name: "Jesse",
  age: 2,
};

// Custom Types
// Type Alias
type stringOrNum = string | number;
let year: stringOrNum;

// Function
const getSum = (a: number, b: number, c?: number) => {
  return a + b;
};

getSum(1, 2);

let calcMultiply: (a: number, b: number) => number;
calcMultiply = (a: number, b: number) => {
  return a * b;
};

// Void
const sayHi = () => {
  console.log("hello");
  //   return void;
};

// Interface of an Object
// - Interfaces enforce a certain structure of an object
interface CarInterface {
  make: string;
  model: string;
  engine: string;
  year: number;
  price: number;
}

let myCar: CarInterface = {
  make: "Ram",
  model: "1500",
  engine: "V8 EcoDiesel",
  year: 2016,
  price: 40_000,
};

class Car implements CarInterface {
  constructor(
    public make: string,
    public model: string,
    public engine: string,
    public year: number,
    public price: number
  ) {}

  sellCar() {
    return `For just $${Math.floor(this.price)}.99 you can buy a ${this.make} ${
      this.model
    } ${this.engine}`;
  }
}

// let newCar = new Car("VW", "GULF", "V8 Diesel", 2019, 40_000);
// console.log(newCar.);

// adding access modifiers

// DOM Manipulation and Type Casting
const inputMake = document.querySelector("#make") as HTMLInputElement;
const inputModel = document.querySelector("#model") as HTMLInputElement;
const inputEngine = document.querySelector("#engine") as HTMLInputElement;
const inputYear = document.querySelector("#year") as HTMLInputElement;
const inputPrice = document.querySelector("#price") as HTMLInputElement;
const inputForm = document.querySelector("form")!;
const niceRideDiv = document.querySelector(".niceRide") as HTMLDivElement;

// adding an event listener on the form so we can setting the New car element manually we will set it
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newCar = new Car(
    inputMake.value,
    inputModel.value,
    inputEngine.value,
    inputYear.valueAsNumber,
    inputPrice.valueAsNumber
  );

  niceRideDiv.innerText = newCar.sellCar();

  inputForm.reset();
});

// Generics
// - There may be instances where I will not know what types something will be
function doSomething<T>(arg: T): T {
  // do something
  return arg;
}
doSomething<string>("5");

interface book<T> {
  id: number;
  name: string;
  data: T;
}

const aBook: book<number[]> = {
  id: 3,
  name: "title 1",
  data: [1, 2, 3],
};

enum MotorcycleManufactures {
  "Harley Davidson",
  "Ducati",
  "BMW",
  "West Coast Chopper",
}

const myMotorCycle = {
  year: 1998,
  make: MotorcycleManufactures["Harley Davidson"],
};

console.log(myMotorCycle.make);
