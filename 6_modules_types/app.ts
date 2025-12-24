/* -----------------------------------------
   MODULES — IMPORT / EXPORT / DEFAULT
------------------------------------------*/

// Imagine payment.ts me ye hoga:
// export function getDetails() {}
// export function addPayment(x: number) {}

import { getDetails, addPayment } from "./payment";

addPayment(12);


/* -----------------------------------------
   EXPORT vs EXPORT DEFAULT
------------------------------------------*/

// export     → multiple things export
// default    → file ka main export (only one)

export const x = 10;
export function hello() {}
export default function main() {
  console.log("I am default export");
}


/* -----------------------------------------
   TYPE ASSERTION (Type Casting)
------------------------------------------*/

let a: any = "aummule";

console.log((a as string).startsWith("a"));
console.log((a as string).endsWith("e"));


// Non-null Assertion (!)
let elem = document.getElementById("root");
// elem!.innerHTML = "Hello";  // ! = trust me it's not null


/* -----------------------------------------
   TYPE GUARDS (typeof / instanceof)
------------------------------------------*/

function abcd(arg: string | number) {
  if (typeof arg === "number") {
    console.log("Number:", arg + 10);
  } 
  else if (typeof arg === "string") {
    console.log("String:", arg.toUpperCase());
  } 
  else {
    console.log("Unknown type");
  }
}

abcd(12);
abcd("hello");


/* -----------------------------------------
   TYPE GUARDS WITH CLASSES
------------------------------------------*/

class TvKaRemote {
  switchoff() {
    console.log("switching off tv");
  }
}

class CarKaRemote {
  switchoff() {
    console.log("switching off car");
  }
}

const tv = new TvKaRemote();
const car = new CarKaRemote();

function switchOffKaro(device: TvKaRemote | CarKaRemote) {
  if (device instanceof TvKaRemote) {
    device.switchoff();
  } 
  else if (device instanceof CarKaRemote) {
    device.switchoff();
  }
}

switchOffKaro(tv);
switchOffKaro(car);


/* -----------------------------------------
   UTILITY TYPES — Partial, Required, Readonly
------------------------------------------*/

interface Person {
  name: string;
  age: number;
  email?: string;
}

// PARTIAL → sab optional
let p1: Partial<Person> = {
  name: "Aum"
};

// REQUIRED → sab required (even email)
let p2: Required<Person> = {
  name: "Aum",
  age: 21,
  email: "test@gmail.com"
};

// READONLY → change nahi ho sakta
let p3: Readonly<Person> = {
  name: "Harsh",
  age: 25,
  email: "abc@gmail.com"
};

// p3.age = 99; // ❌ error
