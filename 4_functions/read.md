# 📘 Functions — TypeScript Notes (Copy‑Paste Ready)

**What this covers:** Function types, optional & default parameters, rest parameters, overloads, and callbacks — with clear, copy‑pasteable examples.

---

## 🔥 1. Function Types

A function’s **parameter types** and **return type** define its signature.

```ts
function abcd(): string {
  return "hello";
}

console.log(abcd()); // "hello"
```

---

## 🔥 2. Optional Parameters (?)

Optional parameters can be omitted. They must come after required parameters.

```ts
function greet(name?: string) {
  console.log("Hello", name);
}

greet(); // Hello undefined
greet("Aum"); // Hello Aum
```

---

## 🔥 3. Default Parameters

If no value is passed, the default is used.

```ts
function welcome(name: string = "Guest") {
  console.log("Welcome", name);
}

welcome(); // Welcome Guest
welcome("Harsh"); // Welcome Harsh
```

---

## 🔥 4. Rest Parameters (...)

Use rest parameters when the number of arguments is variable. The rest parameter must be last.

```ts
function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

---

## 🔥 5. Function Overloads

Provide multiple callable signatures and implement a single function body that satisfies them.

```ts
function getInfo(x: string): string;
function getInfo(x: number): number;
function getInfo(x: any) {
  return x;
}

console.log(getInfo("Aum")); // "Aum"
console.log(getInfo(21)); // 21
```

---

## 🔥 6. Callback Functions

Pass functions as arguments and call them inside your function.

```ts
function doWithCallback(name: string, age: number, cb: () => void) {
  console.log(name, age);
  cb();
}

doWithCallback("Harsh", 25, () => {
  console.log("callback invoked");
});
```

---

## ✅ Full Example (All Concepts)

```ts
// Function type
function abcd(): string {
  return "hello world";
}

// Optional parameter
function greet(name?: string) {
  console.log("Hello", name);
}

// Default parameter
function welcome(name: string = "Guest") {
  console.log("Welcome", name);
}

// Rest parameters
function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0);
}

// Overloads
function getInfo(x: string): string;
function getInfo(x: number): number;
function getInfo(x: any) {
  return x;
}

// Callback
function doWithCallback(name: string, age: number, cb: () => void) {
  console.log(name, age);
  cb();
}

// Usage
console.log(abcd()); // "hello world"
greet(); // Hello undefined
greet("Aum"); // Hello Aum
welcome(); // Welcome Guest
welcome("Harsh"); // Welcome Harsh
console.log(sum(1, 2, 3, 4)); // 10
console.log(getInfo("Aum")); // "Aum"
console.log(getInfo(21)); // 21
doWithCallback("Harsh", 25, () => console.log("cb"));
```

---

### 🔧 Quick Rules & Tips

- Optional params must follow required ones.
- Default values are used when arguments are missing.
- The rest parameter must be the last parameter.
- Overloads provide multiple call signatures; the implementation is a single function.

---

Happy learning! ✅
