# ✨ TypeScript Quick Notes — Clean & Complete

Concise, copy‑pasteable examples and quick rules for getting started with TypeScript.

---

## 🚀 1. TypeScript Commands

```bash
# Create a tsconfig.json
tsc --init

# Recompile automatically on file changes
tsc name.ts --watch
```

---

## 🧠 2. Data Types Overview

Types in TypeScript fall into three broad groups:

- **Primitive types** (copied by value)
- **Reference types** (copied by reference)
- **Special types** (utility-like types such as `any`, `unknown`, `never`, etc.)

---

### 🔹 2.1 Primitive Types (Copied by value)

Primitives are immutable and copied by value.

```ts
let a = 2;
let b = a;

b++;
console.log(a, b); // 2 3
```

Common primitives: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

---

### 🔸 2.2 Reference Types (Copied by reference)

Objects and arrays are reference types — modifying a reference affects all aliases.

```ts
let arr = [1, 2, 3];
let ref = arr;
ref.push(4);
console.log(arr, ref); // both changed
```

Reference types include `Array`, `Object`, and `Function`.

---

## 🎯 3. Special Types (Short examples)

### ⭐ any

Disables type checking — use sparingly.

```ts
let x: any = 10;
x = "aum";
x = true;
```

### ⭐ unknown

Safer alternative to `any` — requires type checks before use.

```ts
let data: unknown = "aum";
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

### ⭐ void

Used for functions that don't return a value.

```ts
function greet(): void {
  console.log("Hello Aum");
}
```

### ⭐ null & undefined

```ts
let n: null = null;
let u: undefined = undefined;
```

### ⭐ never

Indicates code paths that never complete normally (e.g., throw or infinite loop).

```ts
function error(): never {
  throw new Error("Crashed");
}

function loop(): never {
  while (true) {}
}
```

---

## 🎯 4. Tuples

Fixed-length arrays with specified types per element.

```ts
let info: [string, number, boolean] = ["aum", 21, true];
```

---

## 🧩 5. Enums

Named numeric constants (can be string enums too).

```ts
enum UserRoles {
  Admin,
  Editor,
  Guest,
}

let r = UserRoles.Admin; // 0
```

---

## ✅ Quick Summary

|   Concept | Meaning                            |
| --------: | :--------------------------------- |
|       any | disables type checking             |
|   unknown | safer `any`, must check before use |
|      void | no return value from function      |
|      null | explicitly empty value             |
| undefined | variable not assigned              |
|     never | function never returns             |

---

### 🔧 Tips

- Prefer `unknown` over `any` when receiving external data.
- Use `--noImplicitAny` in `tsconfig` to catch accidental `any` usage.
- Tuples are useful for fixed heterogenous data (like [name, age]).

Happy coding! ✅
