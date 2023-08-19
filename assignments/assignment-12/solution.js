// Problem 1
// Create a function that checks if any object in an array contains a null value
// Input: [{ value: 3 }, { value: null }]
// Output: true

function anyNullValue(values) {
    return values.some((valueObj) => valueObj.value === null);
}

const values = [{ value: 3 }, { value: null }];
console.log(anyNullValue(values));

// Problem 2
// Create a function that checks if any element in a matrix is a specific value
// Input: [[1, 2], [3, 4]], value = 4
// Output: true

function anyMatchedValue(matrix, value) {
    return matrix.some((numbers) => numbers.some((number) => number === value));
}

const matrix = [
    [1, 2],
    [3, 4]
];
console.log(anyMatchedValue(matrix, 4));

// Problem 3
// Create a function that checks if any object in an array has a property with a specific length
// Input: [{ word: 'cat' }, { word: 'elephant' }], length = 8
// Output: true

function anyMatchedLength(objects, length) {
    return objects.some((object) => object.word.length === length);
}

const objects = [{ word: "cat" }, { word: "elephant" }];
console.log(anyMatchedLength(objects, 8));

// Problem 4
// Create a function that checks if any sub-array contains a specific number
// Input: [[1, 2], [3, 4, 5]], number = 5
// Output: true

function containsNumber(array, targetNum) {
    return array.some((numbers) =>
        numbers.some((number) => number === targetNum)
    );
}

const array = [
    [1, 2],
    [3, 4, 5]
];
console.log(containsNumber(array, 5));

// Problem 5
// Create a function that checks if any date in an array of objects is after a specific date
// Input: [{ date: '2023-01-01' }, { date: '2023-01-04' }], date = '2023-01-02'
// Output: true

function anyDateAfter(dates, targetDate) {
    return dates.some((dateObj) => dateObj.date > targetDate);
}

const dates = [{ date: "2023-01-01" }, { date: "2023-01-04" }];
console.log(anyDateAfter(dates, "2023-01-02"));
