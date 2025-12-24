# 🚀 Type Inference & Type Annotations — Clean Notes

**What you’ll learn:** how TypeScript infers types, when to annotate, how interfaces and types differ, and how to use unions and intersections — with copy‑pasteable examples.

---

## 🎯 Type Inference

TypeScript often **infers** a variable's type from its initial value.

```ts
let x = 10; // inferred as `number`
// No annotation required when TS can infer the type
```

Use inference to keep code concise when the type is obvious.

---

## 🎯 Type Annotation

When you want to be explicit, add a type annotation.

```ts
let a: number;
a = 10;
```

Annotations are helpful for documentation, public APIs, and when the initial value doesn't fully express the intended type.

---

## 🧩 Interface Declaration & Declaration Merging

Interfaces define object shapes. When two interfaces share the same name, TypeScript **merges** them (declaration merging).

```ts
interface User {
  name: string;
}
interface User {
  email: string;
}

const u: User = { name: "Aum", email: "a@x.com" };
// `User` now has both `name` and `email`
```

Declaration merging is useful for augmentation (e.g., extending library types in different modules).

---

## 🔥 Union Types

A union type lets a value be one of several types.

```ts
let value: number | null | string;
value = null;
value = 42;
value = "text";
```

Unions are useful for optional values, results that can be multiple types, or discriminated unions.

---

## 🛠 Functions with Union Return Types

```ts
function abcd(): number | string | null {
  return 10; // valid
}
console.log(abcd());
```

When returning unions, callers often need type checks or narrowing to use the result safely.

---

## 🧱 Type Aliases

Use `type` to create aliases for object shapes, unions, tuples, etc.

```ts
type User = { name: string; email: string };
```

Type aliases are flexible — ideal for unions and mapped types.

---

## 🧱 Intersections (Extending Types)

Combine types using `&` to create a type that has all properties from both sides.

```ts
type Admin = User & { role: string };
const admin: Admin = { name: "Aum", email: "a@x.com", role: "manager" };
```

Intersections are a common way to extend existing shapes when using `type` aliases.

---

## 🧪 Function Example with Extended Type

```ts
function printAdmin(a: Admin) {
  console.log(a.name, a.role);
}
printAdmin(admin);
```

---

## ❌ Key Difference: `type` vs `interface`

- **Interfaces** can be declaration‑merged and are well suited for object shapes and augmentation. ✅
- **Type aliases** cannot merge; they are powerful for unions, intersections, and more complex type expressions. ❌

If you declare two types with the same name, you'll get an error — types do not merge.

---



### 🔧 Tips

- Prefer `interface` for public object contracts and library augmentation.
- Use `type` for unions, complex mapped types, and when you need more expressiveness.
- Use narrowing (type guards or `typeof` checks) when working with unions.

Happy learning! ✅|
