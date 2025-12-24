"use strict";
/* ---------------------------------------
   FUNCTION TYPES + RETURN TYPES
----------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
function abcd() {
    return "Hello from abcd()";
}
console.log(abcd());
/* ---------------------------------------
   FUNCTION WITH CALLBACK + PARAM TYPES
----------------------------------------*/
function abcdef(name, age, cb) {
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
function greet(name) {
    console.log("Hello", name);
}
greet();
greet("Aum");
/* ---------------------------------------
   DEFAULT PARAMETERS
----------------------------------------*/
function welcome(name = "Guest") {
    console.log("Welcome", name);
}
welcome();
welcome("Rohan");
/* ---------------------------------------
   REST PARAMETERS (...)
----------------------------------------*/
function total(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log("Total:", total(10, 20, 30, 40));
function getInfo(x) {
    return x;
}
console.log(getInfo("Aum"));
console.log(getInfo(22));
//# sourceMappingURL=app.js.map