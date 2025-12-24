/* ---------------------------------------
   FUNCTION TYPES + RETURN TYPES
----------------------------------------*/

function abcd(): string {
  return "Hello from abcd()";
}

console.log(abcd());


/* ---------------------------------------
   FUNCTION WITH CALLBACK + PARAM TYPES
----------------------------------------*/

function abcdef(name: string, age: number, cb: () => void) {
  console.log("Name:", name);
  console.log("Age:", age);
  cb();
}

abcdef("Harsh", 25, () => {
  console.log("Callback executed: abcd");
});


/* ---------------------------------------
   OPTIONAL PARAMETERS (?)
----------------------------------------*/

function greet(name?: string) {
  console.log("Hello", name);
}

greet();
greet("Aum");


/* ---------------------------------------
   DEFAULT PARAMETERS
----------------------------------------*/

function welcome(name: string = "Guest") {
  console.log("Welcome", name);
}

welcome();
welcome("Rohan");


/* ---------------------------------------
   REST PARAMETERS (...)
----------------------------------------*/

function total(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log("Total:", total(10, 20, 30, 40));


/* ---------------------------------------
   FUNCTION OVERLOADING
----------------------------------------*/

function getInfo(x: string): string;
function getInfo(x: number): number;
function getInfo(x: any) {
  return x;
}

console.log(getInfo("Aum"));
console.log(getInfo(22));

