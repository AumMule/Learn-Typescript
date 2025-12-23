/* -------------------------------
   TYPE INFERENCE
---------------------------------*/

let x = 10;           // inferred as number
let name1 = "Aum";     // inferred as string
let active = true;    // inferred as boolean



/* -------------------------------
   TYPE ANNOTATION
---------------------------------*/

let a: number;
a = 10;                // correct

// a = "hello";       // ❌ error



/* -------------------------------
   INTERFACE MERGING
---------------------------------*/

interface User {
  name: string;
}

interface User {
  email: string;
}

// final merged interface:
// User = { name: string, email: string }



/* -------------------------------
   UNION TYPES
---------------------------------*/

let value: number | string | null;

value = 10;
value = "aum";
value = null;



/* -------------------------------
   FUNCTION WITH UNION RETURN TYPE
---------------------------------*/

function abcd(): number | string | null {
  return 10;
}



/* -------------------------------
   TYPE ALIAS
---------------------------------*/

type UserType = {
  name: string;
  email: string;
};



/* -------------------------------
   EXTENDING TYPES WITH &
---------------------------------*/

type Admin = UserType & {
  role: string;
};

// Admin becomes:
// { name: string; email: string; role: string }



/* -------------------------------
   FUNCTION USING EXTENDED TYPE
---------------------------------*/

function bcde(a: Admin) {
  console.log("Admin:", a);
}

bcde({
  name: "Aum",
  email: "aum@example.com",
  role: "SuperAdmin"
});



/* -------------------------------
   TYPES DO NOT MERGE
---------------------------------*/

// ❌ This causes an error:
//
// type Car = { brand: string }
// type Car = { year: number }
//
// Types cannot merge. Only interfaces can.

