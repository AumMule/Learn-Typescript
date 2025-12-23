let a = 10;
let b = a;
b++;

console.log("Primitive:", a, b);

let nums = [1, 2, 3];
let nums2 = nums;
nums2.push(4);
console.log("Reference:", nums, nums2);

let user: [string, number, boolean] = ["aum", 21, true];
console.log("Tuple:", user);

enum UserRoles {
  Admin,
  Editor,
  Guest
}
console.log("Enum:", UserRoles.Admin);

let unknownData: unknown = "Hello";
console.log("Unknown:", unknownData);

function test(): void {
  console.log("This returns nothing");
}

let x: any = 10;
x = "test";

let n: null = null;
let u: undefined = undefined;

function error(): never {
  throw new Error("Something went wrong");
}
