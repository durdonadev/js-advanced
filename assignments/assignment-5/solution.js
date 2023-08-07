// Task 1

function addTwoNumbers(num1, num2) {
    return `The result of adding is ${num1 + num2}`;
}

function subtractTwoNumbers(num1, num2) {
    return `The result of subtracting is ${num1 - num2}`;
}

function multiplyTwoNumbers(num1, num2) {
    return `The result of multiplying is ${num1 * num2}`;
}

function divideTwoNumbers(num1, num2) {
    return `The result of dividing is ${num1 / num2}`;
}

// Task 3

function calculate(num1, num2, callback) {
    return `The result of ${callback(num1, num2)}`;
}

function add(num1, num2) {
    return `adding is ${num1 + num2}`;
}

function subtract(num1, num2) {
    return `subtracting is ${num1 - num2}`;
}

function multiply(num1, num2) {
    return `multiplying is ${num1 * num2}`;
}

function divide(num1, num2) {
    return `dividing is ${num1 / num2}`;
}

console.log(calculate(5, 3, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(4, 6, multiply));
console.log(calculate(15, 3, divide));
