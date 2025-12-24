📘 TypeScript Classes — Ultimate Notes (Complete README)
# 🚀 TypeScript — Classes & OOP Super Notes

This file contains EVERYTHING you need about **Classes**, **Objects**, **Constructors**, **Access Modifiers**, **Optional Props**, **Readonly**, **Getters/Setters**, **Static**, **Abstract**, and **Inheritance**.

---

# 🔥 1. Class & Object Basics



class BottleMaker {
private halua: string = "halua";
constructor(public name: string) {}
}


- `class` = blueprint  
- object = instance  
- constructor = creates object  
- `public name` = parameter property  

---

# 🔥 2. Constructors



class Person {
constructor(public name: string, public age: number) {}
}

let p1 = new Person("Aum", 21);


- Constructor runs automatically  
- Assigns values  
- `public name` automatically creates `this.name`  

---

# 🔥 3. Access Modifiers

| Modifier | Accessible From Class | From Child | From Object |
|---------|------------------------|------------|-------------|
| public  | ✔                      | ✔          | ✔           |
| private | ✔                      | ✖          | ✖           |
| protected | ✔                    | ✔          | ✖           |

### Diagram:


public → everywhere
private → only inside class
protected → class + subclasses


### Example:


class A {
public x = 10;
private y = 20;
protected z = 30;
}


---

# 🔥 4. Inheritance



class MetalBottleMaker extends BottleMaker {
constructor(name: string) {
super(name);
}

getValue() {
console.log(this.name);
}
}

let b1 = new MetalBottleMaker("Chilton");
b1.getValue();


---

# 🔥 5. Readonly Properties

Used for values that **cannot be changed after creation**.



class User {
constructor(public readonly name: string) {}
}

let u1 = new User("Harsh");
// u1.name = "Aum"; // ❌ error


---

# 🔥 6. Optional Properties



class Car {
constructor(public brand: string, public model?: string) {}
}

let c1 = new Car("Toyota");
let c2 = new Car("BMW", "X5");


---

# 🔥 7. Parameter Properties

Short form for writing:



constructor(public name: string) {}


Instead of:



constructor(name: string) {
this.name = name;
}


---

# 🔥 8. Getters & Setters



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

let acc = new Account();
acc.balance = 100;
console.log(acc.balance);


---

# 🔥 9. Static Members

Belong to the **class**, not to objects.



class MathHelper {
static pi = 3.14;

static square(n: number) {
return n * n;
}
}

console.log(MathHelper.pi);
console.log(MathHelper.square(4));


---

# 🔥 10. Abstract Classes



abstract class Shape {
constructor(public name: string) {}
abstract area(): number;
}

class Circle extends Shape {
constructor(public radius: number) {
super("Circle");
}
area() {
return 3.14 * this.radius * this.radius;
}
}

let s1 = new Circle(5);
console.log(s1.area());


- abstract class cannot be instantiated
- child class must implement `abstract` methods

---

# 🎯 FULL TypeScript Code (Ready to Run)



class BottleMaker {
private halua: string = "halua";
constructor(public name: string) {}
}

class MetalBottleMaker extends BottleMaker {
constructor(name: string) {
super(name);
}

getValue() {
console.log(this.name);
// this.halua ❌ private → Not accessible
}
}

let b1 = new MetalBottleMaker("Chilton");
b1.getValue();

class User {
constructor(public readonly name: string) {}

changeName() {
// this.name = "New Name"; ❌ readonly
}
}

let u1 = new User("Harsh");

class Car {
constructor(public brand: string, public model?: string) {}
}

let c1 = new Car("Toyota");
let c2 = new Car("BMW", "X5");

class Account {
private _balance = 0;

get balance() {
return this._balance;
}

set balance(amount: number) {
if (amount < 0) throw new Error("Invalid");
this._balance = amount;
}
}

let acc = new Account();
acc.balance = 200;
console.log(acc.balance);

class MathHelper {
static pi = 3.14;

static square(n: number) {
return n * n;
}
}

console.log(MathHelper.pi);
console.log(MathHelper.square(4));

abstract class Shape {
constructor(public name: string) {}
abstract area(): number;
}

class Circle extends Shape {
constructor(public radius: number) {
super("Circle");
}
area() {
return 3.14 * this.radius * this.radius;
}
}

let sh = new Circle(5);
console.log(sh.area());


---

# 📌 Summary Chart

| Topic | Meaning |
|------|---------|
| Class | Blueprint |
| Constructor | Runs on object creation |
| public | Accessible everywhere |
| private | Only inside class |
| protected | Class + child |
| readonly | Cannot change |
| optional (?) | May or may not exist |
| getter | Access private values |
| setter | Validate before setting |
| static | Belongs to class |
| abstract | Must be inherited |

---

# 🎉 End of Notes  
Aum bhai — yeh ekdum **full-fledged professional README** hai.  
Iske upar tu TypeScript ka full college assignment bana sakta hai.

Agar chaahe toh main:

- 🧾 PDF version  
- 🎨 Colored headings  
- 📂 Proper folder structure  
- 🎥 Diagrams (OOP flowcharts)  

bhi de sakta hoon.