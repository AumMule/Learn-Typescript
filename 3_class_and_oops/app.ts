/* ---------------------------------------------------
   CLASSES AND OBJECTS — FULL TYPESCRIPT EXAMPLES
---------------------------------------------------*/


/* ------------------------------------
   1. CLASS + CONSTRUCTOR
------------------------------------*/

class BottleMaker {
  private halua: string = "halua";   // private property (only inside class)
  constructor(public name: string) {} // parameter property
}



/* ------------------------------------
   2. INHERITANCE + ACCESS MODIFIERS
------------------------------------*/

class MetalBottleMaker extends BottleMaker {
  constructor(name: string) {
    super(name); // calling parent constructor
  }

  getValue() {
    console.log(this.name); 

    // ❌ this.halua → not allowed (private in parent)
    // console.log(this.halua); // Error
  }
}

let b1 = new MetalBottleMaker("Chilton");
b1.getValue();



/* ------------------------------------
   3. READONLY PROPERTIES
------------------------------------*/

class User {
  constructor(public readonly name: string) {}

  changeName() {
    // ❌ Not allowed because name is readonly
    // this.name = "hellyow"; // Error
  }
}

let u1 = new User("Harsh");
// u1.name = "Aum";  // ❌ Not allowed



/* ------------------------------------
   4. OPTIONAL PROPERTIES
------------------------------------*/

class Car {
  constructor(
    public brand: string,
    public model?: string   // optional
  ) {}
}

let c1 = new Car("Toyota");
let c2 = new Car("BMW", "X5");



/* ------------------------------------
   5. GETTERS AND SETTERS
------------------------------------*/

class Account {
  private _balance: number = 0;

  get balance() {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) throw new Error("Invalid amount");
    this._balance = amount;
  }
}

let acc = new Account();
acc.balance = 200;
console.log("Balance:", acc.balance);



/* ------------------------------------
   6. STATIC MEMBERS
------------------------------------*/

class MathHelper {
  static pi = 3.14;

  static square(n: number) {
    return n * n;
  }
}

console.log(MathHelper.pi);
console.log(MathHelper.square(4));



/* ------------------------------------
   7. ABSTRACT CLASSES & METHODS
------------------------------------*/

abstract class Shape {
  constructor(public name: string) {}

  abstract area(): number;  // must be implemented in child
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }

  area(): number {
    return 3.14 * this.radius * this.radius;
  }
}

let sh = new Circle(5);
console.log("Area:", sh.area());



/* ---------------------------------------------------
   END OF CLASS EXAMPLES
---------------------------------------------------*/
