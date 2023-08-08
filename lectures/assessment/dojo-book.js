// for (let i = -52; i <= 1002; i++) {
//     console.log(i);
// }

function printNum(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}

function isLeapYear(year) {
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    } else if (year % 4 === 0 || year % 400 === 0) {
        return true;
    }
    return false;
}

// console.log(isLeapYear(1403));
// console.log(isLeapYear(1400));
// console.log(isLeapYear(1604));
// console.log(isLeapYear(1600));

function filter(nums, cb) {
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

function isTwoDigitsNumber(num) {
    const absNum = Math.abs(num);
    return absNum >= 10 && absNum <= 99;
}

// console.log(filter([1, 2, 3, 4, 5, 6, 7], isOddNumber));
// console.log(filter([1, 2, 3, 4, 5, 6, 0], isDevisibleByThree));
// console.log(filter([1, -2, 34, 456, -95, 63, 7], isTwoDigitsNumber));

// console.log(
//     filter([1, 2, 3, 4, 5, 6, 7], function (num) {
//         return num % 2 !== 0;
//     })
// );

// Problem 5

function inPigLatin(sentence) {
    const words = sentence.split(" ");
    const wordsInPigLatin = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const latinVersion = latinifly(word);

        wordsInPigLatin.push(latinVersion);
    }
    return wordsInPigLatin.join(" ");
}

function latinifly(word) {
    const vowels = "aeiou";

    if (vowels.includes(word[0].toLowerCase())) {
        return word + "yay";
    } else {
        let firstVowelIndex = null;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (vowels.includes(char.toLowerCase())) {
                firstVowelIndex = i;
                break;
            }
        }
        if (firstVowelIndex === null) {
            return word + "ay";
        } else {
            let latinVersion =
                word.slice(firstVowelIndex) +
                word.slice(word[0], firstVowelIndex) +
                "ay";
            if (word[0] === word[0].toUpperCase()) {
                latinVersion = capitalize(latinVersion);
            }
            return latinVersion;
        }
    }
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log(inPigLatin("Shmanthony is the best teacher"));
