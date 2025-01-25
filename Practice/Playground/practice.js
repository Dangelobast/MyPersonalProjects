let operation = prompt("Choose an operation: add, subtract, multiply, divide");

// Ask the user for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let result;

// Perform the operation based on the user's choice
if (operation === "add") {
    result = num1 + num2;
} else if (operation === "subtract") {
    result = num1 - num2;
} else if (operation === "multiply") {
    result = num1 * num2;
} else if (operation === "divide") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Cannot divide by zero.";
    }
} else {
    result = "Invalid operation. Please choose add, subtract, multiply, or divide.";
}

// Display the result
alert("The result is: " + result);
