// Problem 1
// Create a function that doubles the age property of each object in an array
// Input: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]
// Output: [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]

function doubleAge(agesArr) {
    return agesArr.map((obj) => ({
        name: obj.name,
        age: obj.age * 2
    }));
}

const objectsAge = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
console.log(doubleAge(objectsAge));

// Problem 2
// Create a function that capitalizes the first letter of each string in an array
// Input: ['apple', 'banana']
// Output: ['Apple', 'Banana']

function capitalizeWord(words) {
    return words.map((str) => str[0].toUpperCase() + str.slice(1));
}

const fruits = ["apple", "banana"];
console.log(capitalizeWord(fruits));

// Problem 3
// Create a function that returns the square of the first element of each sub-array
// Input: [[2, 3], [4, 5], [6, 7]]
// Output: [4, 16, 36]

function squareOfFirstNum(numsArr) {
    return numsArr.map((nums) => nums[0] * nums[0]);
}

const numsArray = [
    [2, 3],
    [4, 5],
    [6, 7]
];
console.log(squareOfFirstNum(numsArray));

// Problem 4
// Create a function that concatenates a specific string to each property in an object array
// Input: [{ word: 'cat' }, { word: 'dog' }], string = 's'
// Output: [{ word: 'cats' }, { word: 'dogs' }]

function concatenate(wordObjects, str) {
    return wordObjects.map((obj) => ({ word: obj.word + str }));
}

const animals = [{ word: "cat" }, { word: "dog" }];
console.log(concatenate(animals, "s"));

// Problem 5
// Create a function that calculates the price with tax for each product object
// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 1 }], tax = 0.1
// Output: [{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]

function calculatePriceWithTax(goodsWithPrice, tax) {
    return goodsWithPrice.map((goods) => ({
        name: goods.name,
        price: goods.price + tax
    }));
}

const goods = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 }
];
console.log(calculatePriceWithTax(goods, 0.1));
