// Part 1

function filterNums(nums, cb) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (cb(num)) {
            result.push(num);
        }
    }
    return result;
}

function isOddNumber(num) {
    return num % 2 !== 0;
}

function isDevisibleByThree(num) {
    return num % 3 === 0;
}

function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function isPerfectSquare(num) {
    for (let i = 0; i <= num; i++) {
        if (num === Math.pow(i, 2)) {
            return true;
        }
    }
    return false;
}

// console.log(filterNums([1, 2, 3, 4, 5, 6, 7], isOddNumber));
// console.log(filterNums([1, 2, 3, 4, 5, 6, 0], isDevisibleByThree));
// console.log(filterNums([2, 3, 4, 5, 6], isPrimeNumber));
// console.log(filterNums([1, 4, 5, 9, 16], isPerfectSquare));

// Part 2

function filterWords(words, cb) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (cb(word)) {
            result.push(word);
        }
    }
    return result;
}

function isPalindrome(word) {
    return (
        word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
    );
}

function isLowercase(word) {
    for (let i = 0; i < word.length; i++) {
        if (word.includes(word[i].toUpperCase())) {
            return false;
        }
    }
    return true;
}

function isConsonantWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

function isOneVowelWord(word) {
    const vowels = "aeiou";
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            vowelCount++;
        }
    }
    return vowelCount === 1;
}

console.log(filterWords(["racecar", "madam", "apple"], isPalindrome));
console.log(filterWords(["apple", "Banana", "cherry"], isLowercase));
console.log(
    filterWords(["rhythm", "sky", "fly", "apple", "HELLO"], isConsonantWord)
);
console.log(filterWords(["cat", "dog", "Apple", "All"], isOneVowelWord));
