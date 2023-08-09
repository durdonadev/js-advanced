// Part 1

function filterNums(nums, cb) {
    const result = [];
    let i = 0;
    while (i < nums.length) {
        const num = nums[i];
        if (cb(num)) {
            result.push(num);
        }
        i++;
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
    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return num > 1;
}

function isPerfectSquare(num) {
    let i = 0;
    while (i <= num) {
        if (num === Math.pow(i, 2)) {
            return true;
        }
        i++;
    }
    return false;
}

console.log(filterNums([1, 2, 3, 4, 5, 6, 7], isOddNumber));
console.log(filterNums([1, 2, 3, 4, 5, 6, 0], isDevisibleByThree));
console.log(filterNums([2, 3, 4, 5, 6], isPrimeNumber));
console.log(filterNums([1, 4, 5, 9, 16], isPerfectSquare));

// Part 2

function filterWords(words, cb) {
    const result = [];
    let i = 0;
    while (i < words.length) {
        const word = words[i];
        if (cb(word)) {
            result.push(word);
        }
        i++;
    }
    return result;
}

function isPalindrome(word) {
    return (
        word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
    );
}

function isLowercase(word) {
    let i = 0;
    while (i < word.length) {
        if (word.includes(word[i].toUpperCase())) {
            return false;
        }
        i++;
    }
    return true;
}

function isConsonantWord(word) {
    const vowels = "aeiou";
    let i = 0;
    while (i < word.length) {
        if (vowels.includes(word[i].toLowerCase())) {
            return false;
        }
        i++;
    }
    return true;
}

function isOneVowelWord(word) {
    const vowels = "aeiou";
    let vowelCount = 0;
    let i = 0;
    while (i < word.length) {
        if (vowels.includes(word[i].toLowerCase())) {
            vowelCount++;
        }
        i++;
    }
    return vowelCount === 1;
}

console.log(filterWords(["racecar", "madam", "apple"], isPalindrome));
console.log(filterWords(["apple", "Banana", "cherry"], isLowercase));
console.log(
    filterWords(["rhythm", "sky", "fly", "apple", "HELLO"], isConsonantWord)
);
console.log(filterWords(["cat", "dog", "Apple", "All"], isOneVowelWord));
