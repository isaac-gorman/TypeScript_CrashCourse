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
    make: string,
    model: string,
    engine: string,
    year: number,
    price: number
  ) {
    (this.make = make),
      (this.model = model),
      (this.engine = engine),
      (this.year = year),
      (this.price = price);
  }
  make: string;
  model: string;
  engine: string;
  year: number;
  price: number;

  sellCar() {
    return `For just $${Math.floor(this.price)}.99 you can buy a ${this.make} ${
      this.model
    } ${this.engine}`;
  }
}

let newCar = new Car("VW", "GULF", "V8 Diesel", 2019, 40_000);
console.log(newCar.sellCar());
