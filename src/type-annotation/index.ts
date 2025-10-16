// Basic Types
let nome: string = "Ricardo";
let idade: number = 35;
let atulto: boolean = true;
let simbolo: symbol = Symbol("qualquer-simbolo");
let big: bigint = 10n;

// Arrays
let myNumbers: Array<number> = [1, 2, 3, 4, 5];
let myNumbers2: number[] = [1, 2, 3, 4, 5];
let myStrings: Array<string> = ["one", "two", "three"];
let myStrings2: string[] = ["one", "two", "three"];

// Array<T> - T[]
function multiplyArgs(...args: Array<number>): number {
  return args.reduce((x, y) => x * y);
}

console.log("Result of multiplyArgs Function: ", multiplyArgs(2, 4, 6, 8, 10));

// Tuple
const clientData: [string, string, number] = ["Ricardo", "Jorge", 35];
const clientData2: readonly string[] = ["Ricardo", "Jorge"];
console.log(clientData);

clientData[0] = "Marianna";
clientData[1] = "Sousa";
clientData[2] = 33;

// Objects
let employee = {
  name: "Ricardo",
  lastName: "Jorge",
  age: 35,
  adult: true,

  showName(): void {
    console.log(this.name + " " + this.lastName);
  },
};

const objectA: {
  readonly keyA: string;
  keyB: string;
  KeyC?: string;
  [Key: string]: unknown;
} = {
  keyA: "keyA Value",
  keyB: "KeyB Value",
  KeyC: "KeyC Value",
  keyD: "KeyD Value",
};

objectA.keyB = "New Value";

console.log(objectA);
// Functions
function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(5, 11));
console.log(employee);

// Type void

function noReturn(...args: string[]): void {
  console.log(args.join(" "));
}

noReturn("Ricardo", "Lemos", "Azevedo", "Jorge");

employee.showName();

// Enum

enum Colors {
  RED,
  BLUE,
  GREEN,
}

function setColor(color: Colors) {
  console.log("Color set to:", Colors[color]);
}

setColor(Colors.GREEN);

console.log(Colors);
console.log(Colors[0]);
console.log(Colors.BLUE);

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(5, 11));
console.log(addOrConcat("5", "11"));
console.log(addOrConcat(5, "11"));
