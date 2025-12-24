/* ---------------------------------------------------
   CLASSES AND OBJECTS — FULL TYPESCRIPT EXAMPLES
---------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* ------------------------------------
   1. CLASS + CONSTRUCTOR
------------------------------------*/
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
        this.halua = "halua"; // private property (only inside class)
    } // parameter property
    return BottleMaker;
}());
/* ------------------------------------
   2. INHERITANCE + ACCESS MODIFIERS
------------------------------------*/
var MetalBottleMaker = /** @class */ (function (_super) {
    __extends(MetalBottleMaker, _super);
    function MetalBottleMaker(name) {
        return _super.call(this, name) || this; // calling parent constructor
    }
    MetalBottleMaker.prototype.getValue = function () {
        console.log(this.name);
        // ❌ this.halua → not allowed (private in parent)
        // console.log(this.halua); // Error
    };
    return MetalBottleMaker;
}(BottleMaker));
var b1 = new MetalBottleMaker("Chilton");
b1.getValue();
/* ------------------------------------
   3. READONLY PROPERTIES
------------------------------------*/
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.changeName = function () {
        // ❌ Not allowed because name is readonly
        // this.name = "hellyow"; // Error
    };
    return User;
}());
var u1 = new User("Harsh");
// u1.name = "Aum";  // ❌ Not allowed
/* ------------------------------------
   4. OPTIONAL PROPERTIES
------------------------------------*/
var Car = /** @class */ (function () {
    function Car(brand, model // optional
    ) {
        this.brand = brand;
        this.model = model;
    }
    return Car;
}());
var c1 = new Car("Toyota");
var c2 = new Car("BMW", "X5");
/* ------------------------------------
   5. GETTERS AND SETTERS
------------------------------------*/
var Account = /** @class */ (function () {
    function Account() {
        this._balance = 0;
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (amount) {
            if (amount < 0)
                throw new Error("Invalid amount");
            this._balance = amount;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var acc = new Account();
acc.balance = 200;
console.log("Balance:", acc.balance);
/* ------------------------------------
   6. STATIC MEMBERS
------------------------------------*/
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.square = function (n) {
        return n * n;
    };
    MathHelper.pi = 3.14;
    return MathHelper;
}());
console.log(MathHelper.pi);
console.log(MathHelper.square(4));
/* ------------------------------------
   7. ABSTRACT CLASSES & METHODS
------------------------------------*/
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, "Circle") || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return 3.14 * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var sh = new Circle(5);
console.log("Area:", sh.area());
/* ---------------------------------------------------
   END OF CLASS EXAMPLES
---------------------------------------------------*/
