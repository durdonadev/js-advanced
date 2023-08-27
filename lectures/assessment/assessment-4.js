// Problem-1: Check if we can form a  Palindrome from given string
/*
  Create a function, isPalindromePossible, that takes a string and returns true if it is possible to rearrange its characters to form a palindrome.
  Input and Output examples:
  isPalindromePossible("eraccar"); // true, as characters can be arranged to form "racecar"
  isPalindromePossible("abcabc"); // true, as characters can be arranged to form "abccba", or "baccab"
  isPalindromePossible("abcba"); // true, as characters can be arranged to form "abcba", or "bacab"
*/

function isPalindromePossible(str) {
    const charCount = charFrequency(str);

    if (str.length % 2 === 0) {
        for (const char in charCount) {
            if (charCount[char] % 2 !== 0) {
                return false;
            }
        }
    } else {
        let oddCount = 0;
        for (const char in charCount) {
            if (charCount[char] % 2 !== 0) {
                oddCount++;
            }
        }
        return oddCount === 1;
    }
    return true;
}

// console.log(isPalindromePossible("aabbcc"));
// console.log(isPalindromePossible("aabbbcc"));
// console.log(isPalindromePossible("racecar"));
// console.log(isPalindromePossible("charrach"));

// Problem-2: Add value to the beginning of array
/*
  Create a function, myShift, that takes an array and a value and pushes it to the beginning of the array without using the unshift method. You should do operation on given array and return the given array. DO NOT CREATE a new array
  Input and Output examples:
  const arr = [1, 2, 3];
  arr.myShift(4); // [4, 1, 2, 3]
*/

// function myUnShift(arr, value) {
//     for (let i = arr.length; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = value;
//     return arr;
// }

function myUnShift(arr, value) {
    arr.push(value);
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }

    return arr;
}

// console.log(myUnShift([1, 2, 3], 4));

// Problem-3: Remove a Value from an Array
/*
  Create a function, myRemove, that takes an array and a  value and removes it from the array. Do not use splice, slice, indexOf, includes. You can use pop method only if required. You should do operation on given array and return the given array. DO NOT CREATE a new array
  Input and Output examples:
  const arr = [1, 2, 3, 4];
  arr.myRemove(2); // [1, 3, 4]
*/

function myRemove(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            while (i < array.length - 1) {
                array[i] = array[i + 1];
                i++;
            }
            array.pop();
            break;
        }
    }

    return array;
}

// function myRemove(arr, value) {
//     let foundIndex = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             foundIndex = i;
//             break;
//         }
//     }
//     if (foundIndex !== -1) {
//         for (let i = foundIndex; i < arr.length - 1; i++) {
//             arr[i] = arr[i + 1];
//         }
//         arr.pop();
//     }
//     return arr;
// }

console.log(myRemove([1, 2, 3, 4], 2));
// console.log(myRemove([1, 2, 3, 5, 9, 6], 3));

// Problem-4: Create a Function to Generate Fibonacci Sequence
/*
  Create a function that takes a number and generates a sequence of Fibonacci numbers, returning them in an array. The first 2 numbers of array would be 0 and 1. 
  Input and Output examples:
  generateFibonacci(5); // [0, 1, 1, 2, 3]
  generateFibonacci(8); // [0, 1, 1, 2, 3, 5, 8, 13]
*/

function generateFibonacci(range) {
    const arr = [0, 1];

    while (arr.length < range) {
        let lastIdx = arr.length - 1;
        let beforeLastIdx = arr.length - 2;
        let temp = arr[lastIdx] + arr[beforeLastIdx];
        arr.push(temp);
    }
    return arr;
}

// console.log(generateFibonacci(5));
// console.log(generateFibonacci(8));

// Problem-5: Create a Function to Find Least Common Multiple
/*
  Create a function, lcm, that returns the lowest number which is a multiple of both inputs.
  Input and Output examples:
  lcm(2, 3); // 6
  lcm(6, 10); // 30
  lcm(24, 26); // 312
*/

function lcm(num1, num2) {
    let i = 1;
    while (true) {
        if (i % num1 === 0 && i % num2 === 0) {
            break;
        }
        i++;
    }
    return i;
}

// console.log(lcm(2, 3));
// console.log(lcm(6, 10));

// Problem-6: Create a Function to Generate N Prime Numbers
/*
  Create a function, generatePrimes, that takes a positive integer n and returns an array containing the first n prime numbers.
  Input and Output examples:
  generatePrimes(3); // [2, 3, 5]
  generatePrimes(5); // [2, 3, 5, 7, 11]
*/

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(3));

function generatePrimes(range) {
    const primes = [];
    let num = 2;

    while (primes.length < range) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

// console.log(generatePrimes(3));
// console.log(generatePrimes(5));

// Problem-7: Create a Function to Determine if a Target String Can Be Formed
/*
  Create a function, canFormTarget, that takes three strings: string1, string2, and target. Return true if the target string can be formed by combining characters from string1 and string2 without considering their order, without using any character more than it appears in string1 and string2, and without leaving any extra characters.
  Input and Output examples:
  canFormTarget("ab", "cd", "abcd"); // true
  canFormTarget("cat", "dog", "actdog"); // true
  canFormTarget("a", "b", "aa"); // false
  canFormTarget("a", "b", "abx"); // false
*/

function charFrequency(str) {
    const characters = str.split("");

    return (charCount = characters.reduce((acc, char) => {
        if (acc[char]) {
            acc[char]++;
        } else {
            acc[char] = 1;
        }
        return acc;
    }, {}));
}

// console.log(charFrequency("cat"));

function canFormTarget(str1, str2, target) {
    if (str1.length + str2.length !== target.length) {
        return false;
    }

    const concatStrs = str1 + str2;

    const strsCharCount = charFrequency(concatStrs);
    const targetCharCount = charFrequency(target);
    for (const char in targetCharCount) {
        if (targetCharCount[char] !== strsCharCount[char]) {
            return false;
        }
    }
    return true;
}

// console.log(canFormTarget("ab", "cd", "abcd"));
// console.log(canFormTarget("a", "b", "aa"));
// console.log(canFormTarget("a", "b", "abx"));
