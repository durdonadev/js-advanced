// Problem 1:
// Create a function that filters objects with a specific property value
// Input: [{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }], type = 'fruit'
// Output: [{ type: 'fruit', name: 'apple' }]

function filterByType(objects, type) {
    return objects.filter((object) => object.type === type);
}

const objects = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" }
];
console.log(filterByType(objects, "fruit"));

// Problem 2
// Create a function that filters all sub-arrays with a specific length
// Input: [[1, 2], [3, 4, 5]], length = 2
// Output: [[1, 2]]

function filterSubArrays(arrays, length) {
    return arrays.filter((array) => array.length === length);
}

const arrays = [
    [1, 2],
    [3, 4, 5]
];
console.log(filterSubArrays(arrays, 2));

// Problem 3
// Create a function that filters products with a price within a specific range
// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], min = 15, max = 20
// Output: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }]

function filterByPrice(products, minRange, maxRange) {
    return products.filter(
        (product) => product.price >= minRange && product.price <= maxRange
    );
}

const products = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 },
    { name: "Pencil", price: 14 }
];
console.log(filterByPrice(products, 15, 20));

// Problem 4
// Create a function that filters words that start with a specific letter from an array of objects
// Input: [{ word: 'cat' }, { word: 'dog' }], letter = 'c'
// Output: [{ word: 'cat' }]

function filterWordByLetter(words, letter) {
    return words.filter(
        (wordObj) => wordObj.word[0].toLowerCase() === letter.toLowerCase()
    );
}

const words = [{ word: "cat" }, { word: "dog" }, { word: "Cow" }];
console.log(filterWordByLetter(words, "c"));

// Problem 5
// Create a function that filters dates before a specific date from an array of objects
// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-02'
// Output: [{ date: '2023-01-01' }]

function filterDates(dates, targetDate) {
    return dates.filter((dateObj) => dateObj.date < targetDate);
}

const dates = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
console.log(filterDates(dates, "2023-01-02"));
