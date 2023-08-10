// 1. Callback Function with Loop
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
}

const processArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
};

// 2. Closure with Increment Function
function counter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}

const counter = () => {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
};

// 3. Function Using a Helper Function with Loop
function sumOfSquares(numbers) {
    function square(x) {
        return x * x;
    }
    let sum = 0;
    for (let number of numbers) {
        sum += square(number);
    }
    return sum;
}

const sumOfSquares = (numbers) => {
    function square(x) {
        return x * x;
    }
    let sum = 0;
    for (let number of numbers) {
        sum += square(number);
    }
    return sum;
};

// 4. Function with Multiple Helper Functions
function mathOperations(a, b) {
    function add() {
        return a + b;
    }
    function multiply() {
        return a * b;
    }
    return { add: add, multiply: multiply };
}

const mathOperations = (a, b) => {
    function add() {
        return a + b;
    }
    function multiply() {
        return a * b;
    }
    return { add: add, multiply: multiply };
};

// 5. Function with Closure and Callback
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const createMultiplier = (multiplier) => {
    return (number) => number * multiplier;
};

// 6. Function with Multiple Callbacks
function stringManipulation(str, operation1, operation2) {
    return operation2(operation1(str));
}

const stringManipulation = (str, operation1, operation2) =>
    operation2(operation1(str));

// 7. Function with Callback and Loop
function computeAverage(nums, callback) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return callback(sum / nums.length);
}

const computeAverage = (nums, callback) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return callback(sum / nums.length);
};
