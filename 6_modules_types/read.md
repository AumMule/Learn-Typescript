# 📦 Modules, Types & Guards — Clean Notes

Covers: named & default exports/imports, type assertions, non-null assertion, runtime type guards (`typeof`, `instanceof`, `in`), and common utility types (`Partial`, `Required`, `Readonly`).

---

## 🔥 1. Modules (Export / Import)

Split code into files using exports and imports.

### Named Exports

```ts
// payment.ts
export function addPayment(amount: number) {
  /* ... */
}
export function getDetails(id: string) {
  /* ... */
}
```

```ts
// app.ts
import { addPayment, getDetails } from "./payment";
addPayment(12);
```

### Default Export

```ts
// main.ts
export default function main() {
  console.log("default export");
}

// app.ts
import main from "./main";
main();
```

Notes:

- Use named exports for multiple utilities.
- Use default export when a module has a single primary export.
- You can re-export: `export * from './utils';` or `export { helper } from './utils';`

---

## 🔥 2. Type Assertions

When you know more about the runtime type than TypeScript does, use `as` to assert a type.

```ts
let a: any = "aum";
(a as string).startsWith("a");
// or (when not in JSX) using angle-bracket syntax:
// (<string>a).startsWith("a");
```

Prefer `as` in TSX/JSX files to avoid syntax conflicts.

---

## 🔥 3. Non‑null Assertion (`!`)

If TypeScript thinks a value might be null but you know it won't be, use `!` carefully.

```ts
const elem = document.getElementById("root");
elem!.innerHTML = "Hello"; // assert non-null
```

Only use this when you are certain a value is non-null — otherwise you risk runtime errors.

---

## 🔥 4. Type Guards (Runtime checks)

Type guards let you narrow union types at runtime.

### Using `typeof`

```ts
function process(arg: string | number) {
  if (typeof arg === "number") {
    console.log("Number:", arg + 10);
  } else {
    console.log("String:", arg.toUpperCase());
  }
}
```

### Using `instanceof`

```ts
class TvRemote {
  switchoff() {
    console.log("tv off");
  }
}
class CarRemote {
  switchoff() {
    console.log("car off");
  }
}

function switchOff(device: TvRemote | CarRemote) {
  if (device instanceof TvRemote) device.switchoff();
  else device.switchoff();
}
```

### Using `in` (for object shapes)

```ts
type A = { kind: "a"; a: number };
type B = { kind: "b"; b: string };
function handle(x: A | B) {
  if ("a" in x) {
    /* x is A */
  }
}
```

---

## 🔥 5. Utility Types

Built-in mapped types make common transforms easy.

```ts
interface Person {
  name: string;
  age: number;
  email?: string;
}

// Partial<T>: all properties optional
const p1: Partial<Person> = { name: "Aum" };

// Required<T>: makes optional properties required
const p2: Required<Person> = { name: "Aum", age: 21, email: "x@gmail.com" };

// Readonly<T>: properties cannot be reassigned
const p3: Readonly<Person> = { name: "Harsh", age: 25, email: "a@b.com" };
// p3.age = 50; // Error
```

Other useful utility types: `Pick<T,K>`, `Omit<T,K>`, `Record<K,T>`, `Exclude`, `Extract`.

---

## ✅ Full Example (app.ts)

```ts
// app.ts
import { addPayment } from "./payment";

addPayment(12);

// Type assertion
let a: any = "aummule";
console.log((a as string).startsWith("a"));

// Type guards
function abcd(arg: string | number) {
  if (typeof arg === "number") console.log("Number:", arg + 10);
  else console.log("String:", arg.toUpperCase());
}
abcd(12);
abcd("hello");

// instance of
class TvRemote {
  switchoff() {
    console.log("tv off");
  }
}
class CarRemote {
  switchoff() {
    console.log("car off");
  }
}

function switchOff(device: TvRemote | CarRemote) {
  if (device instanceof TvRemote) device.switchoff();
  else device.switchoff();
}

// utils with utility types
interface Person {
  name: string;
  age: number;
  email?: string;
}
const p1: Partial<Person> = { name: "Aum" };
const p2: Required<Person> = { name: "Aum", age: 21, email: "x@gmail.com" };
const p3: Readonly<Person> = { name: "Harsh", age: 30, email: "y@gmail.com" };
```

---

### 🔧 Tips

- Prefer named exports for multiple helpers; default export for a single primary export.
- Use `as` for safe type assertions; avoid non-null assertions unless necessary.
- Use type guards (`typeof`, `instanceof`, `in`) to safely narrow union types.

---

Happy coding! ✅
