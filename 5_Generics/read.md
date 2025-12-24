# 🚀 Generics

**What are generics?** Generics make functions, interfaces, and classes reusable and type-safe by letting you parameterize types (instead of using `any`).

---

## 🔥 1. Generic Functions

Basic generic function with one type parameter.

```ts
function log<T>(val: T): T {
  console.log(val);
  return val;
}

log<string>("hello");
log(123); // type inference: T = number
```

Tip: Type arguments are often inferred — you rarely need to write `<...>` explicitly.

---

## 🔥 2. Generic Interfaces

Define shapes that depend on a type parameter.

```ts
interface Box<T> {
  value: T;
}
const b1: Box<string> = { value: "Aum" };
const b2: Box<number> = { value: 99 };
```

---

## 🔥 3. Generic Classes

Store typed values in instances.

```ts
class Container<T> {
  constructor(public item: T) {}
}
const c = new Container<number>(100);
```

---

## 🔥 4. Multiple Type Parameters

Mix multiple generics for flexible APIs.

```ts
function pair<A, B>(x: A, y: B) {
  return { x, y };
}
const p = pair<string, number>("Aum", 21);
```

---

## 🔥 5. Constraining Generics

Use `extends` to restrict allowed types.

```ts
function getLength<T extends { length: number }>(arg: T) {
  return arg.length;
}
getLength([1, 2, 3]); // 3
getLength("hello world"); // 11
// getLength(10); // Error: number has no property 'length'
```

---

## 🔥 6. Default Type Parameters

Provide a default type when none is specified.

```ts
type Result<T = string> = { value: T };
const r1: Result = { value: "ok" }; // T inferred as string
const r2: Result<number> = { value: 2 };
```

---

## 🔥 7. Generic Constraints with Keys

Use `keyof` to operate on object keys safely.

```ts
function pluck<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const o = { name: "Aum", age: 21 };
pluck(o, "name"); // "Aum"
// pluck(o, "missing"); // Error: 'missing' not in 'o'
```

---

## 🔥 8. Generic Utility Types (Examples)

Short list of useful built-ins:

- `Partial<T>` — make properties optional
- `Readonly<T>` — make properties readonly
- `Record<K, T>` — create a keyed object type

```ts
type Person = { name: string; age: number };
const p: Partial<Person> = { name: "Aum" };
const r: Readonly<Person> = { name: "Aum", age: 21 };
```

---

## ✅ Quick Summary

- Generics provide **reusability + strict typing**.
- Use constraints (`extends`) to limit generic types.
- Prefer inference and default type parameters for ergonomic APIs.

---

Happy coding! ✅
