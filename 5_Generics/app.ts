/* ---------------------------------------
   1. Generic Function
----------------------------------------*/

// Generic logger — accepts ANY type
function log<T>(val: T): void {
  console.log("Logged:", val);
}

log<number>(12);
log<string>("Aum");
log<boolean>(true);
log<{ name: string }>({ name: "Harsh" });


/* ---------------------------------------
   2. Generic Function (Multi-use)
----------------------------------------*/

function abcd<T>(a: T, b: T): T {
  return a; 
}

console.log(abcd<string>("hey", "hello"));
console.log(abcd<number>(10, 20));


/* ---------------------------------------
   3. Generic Interface
----------------------------------------*/

interface Box<T> {
  value: T;
}

let b1: Box<string> = { value: "Aum" };
let b2: Box<number> = { value: 99 };

console.log(b1.value);
console.log(b2.value);


/* ---------------------------------------
   4. Generic Class
----------------------------------------*/

class Container<T> {
  constructor(public item: T) {}

  getItem(): T {
    return this.item;
  }
}

let c1 = new Container<string>("Bottle");
let c2 = new Container<number>(111);

console.log(c1.getItem());
console.log(c2.getItem());


/* ---------------------------------------
   5. Generic Array Example
----------------------------------------*/

let numbers: Array<number> = [1, 2, 3, 4];
let names: Array<string> = ["Aum", "Harsh", "Jay"];

console.log(numbers, names);

