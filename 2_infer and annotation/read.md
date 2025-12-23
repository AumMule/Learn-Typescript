# 🚀 What We Will Learn

## ✅ Type Inference & Type Annotation  
## ✅ Extends  
## ✅ Using Interface to Define Object Shapes  

---

# 🎯 Type Inference

TypeScript automatically assigns a type based on the value.

let x = 10;
// TS infers: number

yaml
Copy code

You don’t need to manually annotate if TS can figure it out.

---

# 🎯 Type Annotation

You specifically tell TS what the type should be.

let a: number;
a = 10;

yaml
Copy code

This is called **type annotation**.

---

# 🧩 Interface Merging

In TypeScript, **if two interfaces have the same name, they merge**.

Example:

interface User {
name: string;
}

interface User {
email: string;
}

// Final merged result:
User = {
name: string,
email: string
}

yaml
Copy code

This is called **Declaration Merging**.

---

# 🔥 Union Types

let value: number | null | string;

yaml
Copy code

A variable can hold multiple possible types.

---

# 🛠 Using Union Return Type Example

function abcd(): number | string | null {
return 10;
}

yaml
Copy code

---

# 🧱 Using Type Alias

type User = {
name: string,
email: string
}

yaml
Copy code

---

# 🧱 Extending Types with Intersections (&)

type Admin = User & {
role: string
}

yaml
Copy code

Now Admin has:

- name  
- email  
- role  

---

# 🧪 Function Example with Extended Type

function bcde(a: Admin) {
console.log(a);
}

yaml
Copy code

---

# ❌ Important: `type` Does NOT Merge

Unlike interfaces:

- **Interfaces merge**  
- **Types DO NOT merge**

If you declare two types with the same name:

type User = { name: string }
type User = { email: string }



You get an error.  
Types cannot be merged — they remain isolated.

---

# ✅ Summary

| Concept | Meaning |
|--------|---------|
| Type Inference | TS guesses the type |
| Type Annotation | You manually set the type |
| Interface | Can merge and define object structure |
| Type Alias | Cannot merge, used for unions & intersections |
| Extends (&) | Combine types together |
| Union Types | Multiple possible types |