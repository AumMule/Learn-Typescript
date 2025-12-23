# ✨ TypeScript Quick Notes — Clean & Complete

## 🚀 1. TypeScript Commands

tsc --init



Creates tsconfig.json.

tsc --watch

Recompiles automatically on save.

---

# 🧠 2. Data Types in TypeScript

Types are categorized into:

- Primitive Types  
- Reference Types  
- Special Types  

---

# 🔹 2.1 Primitive Types (Copied by Value)

let a = 2;
let b = a;

b++;

console.log(a, b); // 2 3


Primitive types:

- number  
- string  
- boolean  
- null  
- undefined  
- symbol  
- bigint  

---

# 🔸 2.2 Reference Types (Copied by Reference)

let arr = [1, 2, 3];
let ref = arr;

ref.push(4);

console.log(arr, ref); // both changed


Reference types:

- Array  
- Object  
- Function  

---

# 🎯 3. Special Types

## ⭐ any
No type checking — “do anything”.

let x: any = 10;
x = "aum";
x = true;


---

## ⭐ unknown  
Safer alternative to `any`.

let data: unknown = "aum";

if (typeof data === "string") {
console.log(data.toUpperCase());
}


---

## ⭐ void  
Function returns nothing.

function greet(): void {
console.log("Hello Aum");
}


---

## ⭐ null

let n: null = null;


---

## ⭐ undefined

let u: undefined;


---

## ⭐ never  
Function never returns.

function error(): never {
throw new Error("Crashed");
}

Copy code
function loop(): never {
while (true) {}
}

---

# 🎯 4. Tuples

let info: [string, number, boolean] = ["aum", 21, true];

---

# 🧩 5. Enums

enum UserRoles {
Admin,
Editor,
Guest
}

let r = UserRoles.Admin;




# ✅ Summary Table

| Concept | Meaning |
|--------|---------|
| any | disables type checking |
| unknown | safer any, must check before use |
| void | no return value |
| null | empty value |
| undefined | variable not assigned |
| never | function never returns |
