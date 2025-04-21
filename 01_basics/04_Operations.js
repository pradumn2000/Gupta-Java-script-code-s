// Initialize a variable 'value' with number 3
let value = 3;

// Apply the negative operator, so negValue becomes -3
let negValue = -value;

// Prints -3 to the console
console.log(negValue);


// --- String + Number operations (Type Coercion Examples) ---

// "2" is a string, 2 is a number. The number 2 is converted to a string and concatenated.
// Result: "22" (string)
console.log("2" + 2);

// 1 is a number, "2" is a string. 1 is converted to "1", then concatenated.
// Result: "12" (string)
console.log(1 + "2");

// 1 + 2 = 3 (both numbers), then "3" is a string, so 3 is converted to "3"
// Result: "33" (string)
console.log(1 + 2 + "3");

// "1" is a string, so everything becomes string concatenation
// "1" + 2 = "12", then "12" + 2 = "122"
// Result: "122" (string)
console.log("1" + 2 + 2);


// --- Boolean and Unary Plus Operator Examples ---

// true is a boolean value
console.log(true);  // Output: true

// Unary plus (+) tries to convert the value into a number
// +true = 1 because true is coerced to 1
console.log(+true); // Output: 1

// +"" = 0 because empty string is coerced to number 0
console.log(+"" );  // Output: 0
//Here’s your JavaScript code rewritten with **standard comments** as well as **easy-to-understand human explanations** side by side — great for learning!

//---

```js
// Initialize a variable 'value' with number 3
let value = 3;

// Apply the negative operator, so negValue becomes -3
let negValue = -value;

// Prints -3 to the console
console.log(negValue);


// --- String + Number operations (Type Coercion Examples) ---

// "2" is a string, 2 is a number. The number 2 is converted to a string and concatenated.
// Result: "22" (string)
console.log("2" + 2);

// 1 is a number, "2" is a string. 1 is converted to "1", then concatenated.
// Result: "12" (string)
console.log(1 + "2");

// 1 + 2 = 3 (both numbers), then "3" is a string, so 3 is converted to "3"
// Result: "33" (string)
console.log(1 + 2 + "3");

// "1" is a string, so everything becomes string concatenation
// "1" + 2 = "12", then "12" + 2 = "122"
// Result: "122" (string)
console.log("1" + 2 + 2);


// --- Boolean and Unary Plus Operator Examples ---

// true is a boolean value
console.log(true);  // Output: true

// Unary plus (+) tries to convert the value into a number
// +true = 1 because true is coerced to 1
console.log(+true); // Output: 1

// +"" = 0 because empty string is coerced to number 0
console.log(+"" );  // Output: 0
```
/*
---

### ✅ Summary for Learning:

| Expression         | Result | Explanation |
|--------------------|--------|-------------|
| `"2" + 2`          | "22"   | Number 2 becomes string, both joined |
| `1 + "2"`          | "12"   | 1 becomes string, joined with "2" |
| `1 + 2 + "3"`      | "33"   | 1+2 = 3 (number), then "3" is added as string |
| `"1" + 2 + 2`      | "122"  | "1"+2 = "12", then "12"+2 = "122" |
| `+true`            | 1      | Boolean true is coerced to number 1 |
| `+""`              | 0      | Empty string becomes 0 |

---

*/