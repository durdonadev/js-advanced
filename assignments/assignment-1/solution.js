// String.prototype
// 1. reverse(): This method returns a reversed version of the string.
// Example: "Hello".reverse() should return "olleH".
// Example: "world".reverse() should return "dlrow".

String.prototype.reverce = function () {
    return this.split("").reverse().join("");
};

// console.log("Hello".reverce());
// console.log("world".reverce());

// 2. removeVowels(): This method removes all vowels from the string.
// Example: "Hello".removeVowels() should return "Hll".
// Example: "world".removeVowels() should return "wrld".

String.prototype.removeVowels = function () {
    // const vowels = "AaEeIiOoUu";
    // let result = "";

    // for (let i = 0; i < this.length; i++) {
    //     if (!vowels.includes(this[i])) {
    //         result += this[i];
    //     }
    // }
    // return result;

    return this.split(/[AaEeIiOoUu]+/).join("");
};

// console.log("Hello".removeVowels());
// console.log("world".removeVowels());

// 3. countWords(): This method counts the number of words in a string.
// Example: "Hello World".countWords() should return 2.
// Example: "One word".countWords() should return 1.

String.prototype.countWords = function () {
    return this.split(" ").length;
};

// console.log("Hello World".countWords());
// console.log("One word".countWords());

// 4. wrapInTags(tag): This method wraps the string in the given HTML tag.
// Example: "Hello".wrapInTags("b") should return "<b>Hello</b>".
// Example: "world".wrapInTags("i") should return "<i>world</i>".

String.prototype.wrapInTags = function (tag) {
    return `<${tag}>${this}</${tag}>`;
};

// console.log("Hello".wrapInTags("b"));
// console.log("world".wrapInTags("i"));

// 5. isPalindrome(): This method checks if the string is a palindrome (same forwards as backwards, ignoring case).
// Example: "racecar".isPalindrome() should return true.
// Example: "Hello".isPalindrome() should return false.

String.prototype.isPalindrome = function () {
    // for (let i = 0; i < Math.floor(this.length / 2); i++) {
    //     if (this[i].toLoweCase() === this[this.length - 1 - i].toLoweCase()) {
    //         return true;
    //     }
    // }
    // return false;

    return (
        this.toLowerCase() === this.toLowerCase().split("").reverse().join("")
    );
};

// console.log("Racecar".isPalindrome());
// console.log("Hello".isPalindrome());

// Number.prototype
// isPrime(): This method checks if the number is a prime number.
// Example: (7).isPrime() should return true.
// Example: (4).isPrime() should return false.

Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return this > 1;
};

// console.log((7).isPrime());
// console.log((4).isPrime());

// toFactorial(): This method returns the factorial of the number.
// Example: (5).toFactorial() should return 120.
// Example: (3).toFactorial() should return 6.

Number.prototype.toFactorial = function () {
    let factorial = 1;
    for (let i = this; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
};

// console.log((5).toFactorial());
// console.log((3).toFactorial());

// findFactors(): This method returns an array of all factors of the number.
// Example: (10).findFactors() should return [1, 2, 5, 10].
// Example: (16).findFactors() should return [1, 2, 4, 8, 16].

Number.prototype.findFactors = function () {
    let factors = [];

    for (let i = 1; i <= this; i++) {
        if (this % i === 0) {
            factors.push(i);
        }
    }
    return factors;
};

// console.log((10).findFactors());
// console.log((16).findFactors());

// isPerfectSquare(): This method checks if the number is a perfect square.
// Example: (9).isPerfectSquare() should return true.
// Example: (8).isPerfectSquare() should return false.

Number.prototype.isPerfectSquare = function () {
    // for(let i = 0; i <= this; i++) {
    //     if(i * i === this) return true;
    //   }
    //   return false;

    return Number.isInteger(Math.sqrt(this));
};

// console.log((9).isPerfectSquare());
// console.log((8).isPerfectSquare());

// isOdd(): This method checks if a number is odd.
// Example: (5).isOdd() should return true.
// Example: (6).isOdd() should return false.

Number.prototype.isOdd = function () {
    return this % 2 !== 0;
};

// console.log((5).isOdd());
// console.log((6).isOdd());

// Array.prototype
// findMax(): This method returns the maximum value in an array of numbers.
// Example: [1, 2, 3].findMax() should return 3.
// Example: [-1, -2, -3].findMax() should return -1.

Array.prototype.findMax = function () {
    let maxNum = this[0];

    for (let i = 0; i < this.length; i++) {
        if (maxNum < this[i]) {
            maxNum = this[i];
        }
    }
    return maxNum;
};

// console.log([1, 2, 3].findMax());
// console.log([-1, -2, -3].findMax());

// findMin(): This method returns the minimum value in an array of numbers.
// Example: [1, 2, 3].findMin() should return 1.
// Example: [-1, -2, -3].findMin() should return -3.

Array.prototype.findMin = function () {
    let minNum = this[0];

    for (let i = 0; i < this.length; i++) {
        if (minNum > this[i]) {
            minNum = this[i];
        }
    }
    return minNum;
};

// console.log([1, 2, 3].findMin());
// console.log([-1, -2, -3].findMin());

// average(): This method returns the average of all the numbers in the array.
// Example: [1, 2, 3, 4].average() should return 2.5.
// Example: [5, 10, 15, 20].average() should return 12.5.

Array.prototype.average = function () {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum / this.length;
};

// console.log([1, 2, 3, 4].average());
// console.log([5, 10, 15, 20].average());

// removeDuplicates(): This method returns a new array with duplicates removed.
// Example: [1, 2, 2, 3].removeDuplicates() should return [1, 2, 3].
// Example: ["a", "b", "b", "c"].removeDuplicates() should return ["a", "b", "c"].

Array.prototype.removeDuplicates = function () {
    // const unique = [];
    // const seen = {};
    // for(let i = 0; i < this.length; i++) {
    //   if(!seen[this[i]]) {
    //     unique.push(this[i]);
    //     seen[this[i]] = true;
    //   }
    // }
    // return unique;

    const uniqueArray = [];

    for (let i = 0; i < this.length; i++) {
        if (!uniqueArray.includes(this[i])) {
            uniqueArray.push(this[i]);
        }
    }

    return uniqueArray;
};

// console.log([1, 2, 2, 3].removeDuplicates());
// console.log(["a", "b", "b", "c"].removeDuplicates());

// shuffle(): This method returns a new array with the order of the elements randomized.
// Example: [1, 2, 3].shuffle() could return [3, 1, 2].
// Example: ["a", "b", "c"].shuffle() could return ["c", "a", "b"].

Array.prototype.shuffle = function () {
    for (let i = 0; i < this.length; i++) {
        const j = Math.floor(Math.random() * this.length);
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

console.log([1, 2, 3, 4, 5].shuffle());
console.log(["a", "b", "c"].shuffle());
