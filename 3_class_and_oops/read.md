# 📘 TypeScript Classes — OOP Notes (Clean & Copy‑Paste Ready)

Practical, concise notes on classes, constructors, access modifiers, parameter properties, getters/setters, static members, abstract classes, and inheritance — with runnable TypeScript examples.

---

## 🔥 1. Class & Object Basics

A class is a blueprint for creating objects (instances).

```ts
class BottleMaker {
  private halua: string = "halua";
  constructor(public name: string) {}
}

const b = new BottleMaker("Classic");
console.log(b.name); // "Classic"
```

Key terms:

- `class` = blueprint
- object = instance
- constructor = creates object
- `public name` = parameter property (automatically sets `this.name`)

---

## 🔥 2. Constructors

Constructors initialize instance properties when a class is instantiated.

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

const p1 = new Person("Aum", 21);
```

Notes:

- The constructor runs automatically when you call `new`.
- Using `public`/`private` in constructor parameters creates instance properties automatically.

---

## 🔥 3. Access Modifiers

Access modifiers control visibility:

|  Modifier | Accessible in Class | Accessible in Subclass | Accessible outside |
| --------: | :-----------------: | :--------------------: | :----------------: |
|    public |          ✔          |           ✔            |         ✔          |
|   private |          ✔          |           ✖            |         ✖          |
| protected |          ✔          |           ✔            |         ✖          |

Example:

```ts
class A {
  public x = 10;
  private y = 20;
  protected z = 30;
}
```

---

## 🔥 4. Inheritance

Use `extends` to create a subclass and `super()` to call the parent constructor.

```ts
class BottleMaker {
  constructor(public name: string) {}
}

class MetalBottleMaker extends BottleMaker {
  getValue() {
    console.log(this.name);
  }
}

const m = new MetalBottleMaker("Chilton");
m.getValue(); // "Chilton"
```

---

## 🔥 5. Readonly Properties

Use `readonly` to make properties immutable after initialization.

```ts
class User {
  constructor(public readonly name: string) {}
}

const u1 = new User("Harsh");
// u1.name = "Aum"; // Error: Cannot assign to 'name' because it is a read-only property
```

---

## 🔥 6. Optional Properties

Mark a parameter as optional with `?`.

```ts
class Car {
  constructor(public brand: string, public model?: string) {}
}

const c1 = new Car("Toyota");
const c2 = new Car("BMW", "X5");
```

---

## 🔥 7. Parameter Properties (Short-hand)

Parameter properties let you declare and initialize properties in the constructor signature.

```ts
// Short form
class Short {
  constructor(public name: string) {}
}

// Equivalent to the long form:
class Long {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

---

## 🔥 8. Getters & Setters

Use getters/setters to control access and validation for private values.

```ts
class Account {
  private _balance = 0;

  get balance() {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) throw new Error("Invalid amount");
    this._balance = amount;
  }
}

const acc = new Account();
acc.balance = 100;
console.log(acc.balance); // 100
```

---

## 🔥 9. Static Members

Static members belong to the class itself, not instances.

```ts
class MathHelper {
  static pi = 3.14;
  static square(n: number) {
    return n * n;
  }
}

console.log(MathHelper.pi); // 3.14
console.log(MathHelper.square(4)); // 16
```

---

## 🔥 10. Abstract Classes

Abstract classes define common behavior and require subclasses to implement abstract members.

```ts
abstract class Shape {
  constructor(public name: string) {}
  abstract area(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

const s1 = new Circle(5);
console.log(s1.area());
```

Notes:

- Abstract classes cannot be instantiated directly.
- Subclasses must implement all abstract members.

---

## ✅ Full Example (All Concepts)

```ts
class BottleMaker {
  private halua = "halua";
  constructor(public name: string) {}
}

class MetalBottleMaker extends BottleMaker {
  getValue() {
    console.log(this.name);
  }
}

const bottle = new MetalBottleMaker("Chilton");
bottle.getValue();

class User {
  constructor(public readonly name: string) {}
}
const user = new User("Harsh");

class Car {
  constructor(public brand: string, public model?: string) {}
}

class Account {
  private _balance = 0;
  get balance() {
    return this._balance;
  }
  set balance(val: number) {
    if (val < 0) throw new Error("Invalid");
    this._balance = val;
  }
}
const acc = new Account();
acc.balance = 200;
console.log(acc.balance);

class MathHelper {
  static pi = 3.14;
  static square(n: number) {
    return n * n;
  }
}
console.log(MathHelper.pi, MathHelper.square(4));

abstract class Shape {
  constructor(public name: string) {}
  abstract area(): number;
}
class Circle2 extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
console.log(new Circle2(5).area());
```

---

## 📌 Summary Chart

| Topic        | Meaning                 |
| ------------ | ----------------------- |
| Class        | Blueprint               |
| Constructor  | Runs on object creation |
| public       | Accessible everywhere   |
| private      | Only inside class       |
| protected    | Class + child           |
| readonly     | Cannot change           |
| optional (?) | May or may not exist    |
| getter       | Access private values   |
| setter       | Validate before setting |
| static       | Belongs to class        |
| abstract     | Must be inherited       |

---

## 💡 Extras & Next Steps

- Want a PDF version, colorized headings, diagrams, or an `examples/` folder with runnable `.ts` files? I can generate those.
- Exercises: implement a `Repository` class with CRUD methods; create a class hierarchy for vehicles and compute shared behavior.

---

Happy learning! ✅
