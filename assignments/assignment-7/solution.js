// Easy Problems
// 1. Counter Function

function createCounter() {
    let counter = 0;

    return function () {
        counter++;
        return counter;
    };
}

const counter = createCounter();
// console.log(counter());
// console.log(counter());

// 2. Temperature Converter
function temperatureConverter(unit) {
    return function (temperature) {
        if (unit === "C") {
            return ((temperature - 32) * 5) / 9;
        } else if (unit === "F") {
            return (temperature * 9) / 5 + 32;
        } else {
            return "Invalid Unit";
        }
    };
}

const toCelsius = temperatureConverter("C");
const toFahrenheit = temperatureConverter("F");
// console.log(toCelsius(32));
// console.log(toFahrenheit(0));

// 3. Greeting Generator

function greet(name) {
    return function (dayTime) {
        return `Good ${dayTime}, ${name}!`;
    };
}

const greetJohn = greet("John");
// console.log(greetJohn("Morning")); // 'Good Morning, John!'

// 4. Interest Calculator

function interestCalculator(rate) {
    return function (amount) {
        return (rate / 100) * amount;
    };
}

const simpleInterest = interestCalculator(5);
// console.log(simpleInterest(1000)); // 50

// 5. Multiplier Function

function multiplier(factor) {
    return function (num) {
        return factor * num;
    };
}

const double = multiplier(2);
// console.log(double(5));

// Medium Problems
// 1. Double Multiplier

function doubleMultiplier(factor1, factor2) {
    return function (num) {
        return factor1 * factor2 * num;
    };
}

const multiplierThreeNums = doubleMultiplier(2, 3);
// console.log(multiplierThreeNums(5));

// 2. Sequential Greetings

function sequentialGreet(name) {
    return {
        morning: function () {
            return `Good Morning, ${name}!`;
        },

        afternoon: function () {
            return `Good Afternoon, ${name}!`;
        },

        evening: function () {
            return `Good Evening, ${name}!`;
        },
        night: function () {
            return `Good Night, ${name}!`;
        }
    };
}

const johnGreeting = sequentialGreet("John");
// console.log(johnGreeting.morning()); // 'Good Morning, John!'
// console.log(johnGreeting.evening()); // 'Good Evening, John!'

// 3. Personal Library

function personalLibrary() {
    const books = [];
    return {
        add: function (book) {
            books.push(book);
        },
        remove: function (book) {
            const index = books.indexOf(book);
            if (index !== -1) {
                books.splice(index, 1);
            }
        },
        list: function () {
            return books;
        }
    };
}

const myLibrary = personalLibrary();
myLibrary.add("The Nation");
myLibrary.add("Pride and Prejudice");
myLibrary.remove("The Nation");
// console.log(myLibrary.list()); // ['The Nation']

// 4. Multiplication Table Generator

function multiplicationTable(num) {
    return function () {
        const table = [];
        for (let i = 1; i <= 10; i++) {
            table.push(num * i);
        }
        return table;
    };
}

const tableOfThree = multiplicationTable(3);
// console.log(tableOfThree()); // [3, 6, 9, ... , 30]

// 5. Favorite Color Reminder:

function favoriteColorReminder(name, favColor) {
    return function () {
        return `${name}'s favorite color is ${favColor}`;
    };
}

const johnsColor = favoriteColorReminder("John", "Blue");
// console.log(johnsColor()); // 'John's favorite color is Blue.'
