// Problem 1
// Create a function that checks if all objects have a specific property
// Input: [{ name: 'Alice' }, { name: 'Bob' }], property = 'name'
// Output: true

function hasAllProperty(objects, property) {
    return objects.every((obj) => obj[property] !== undefined);
}

const objects = [{ name: "Alice" }, { name: "Bob" }, { name: "Bob", age: 23 }];
console.log(hasAllProperty(objects, "name"));

// Problem 2
// Create a function that checks if all elements in a matrix are positive
// Input: [[1, 2], [3, 4]]
// Output: true

function allPositive(matrix) {
    return matrix.every((nums) => nums.every((num) => num > 0));
}

const matrix = [
    [1, 2],
    [3, 4]
];
console.log(allPositive(matrix));

// Problem 3
// Create a function that checks if all sub-arrays have a specific length
// Input: [[1, 2], [3, 4]], length = 2
// Output: true

function allSubArraysHaveLength(array, length) {
    return array.every((subArray) => subArray.length === length);
}

const input3 = [
    [1, 2],
    [3, 4]
];
console.log(allSubArraysHaveLength(input3, 2));

// Problem 4
// Create a function that checks if all dates in an array of objects are before a specific date
// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-03'
// Output: true

function allDatesBefore(dates, targetDate) {
    return dates.every((dateObj) => dateObj.date < targetDate);
}

const input4 = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
console.log(allDatesBefore(input4, "2023-01-03"));

// Problem 5
// Create a function that checks if all products have a price greater than a specific value
// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], price = 10
// Output: true

function allPricesGreaterThan(products, minPrice) {
    return products.every((product) => product.price > minPrice);
}

const input5 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 }
];
console.log(allPricesGreaterThan(input5, 10));
