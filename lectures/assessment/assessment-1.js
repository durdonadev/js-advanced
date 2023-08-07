// Problem 1: Magic Cipher
function magicCipher(sentence, cipher) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (cipher[char]) {
            result += cipher[char];
        } else {
            result += char;
        }
    }
    return result;
}

console.log("Problem 1: Magic Cipher");
console.log(magicCipher("add me on facebook", { a: "c", d: "q" }));
console.log(magicCipher("where are you?", { v: "l", "?": "!" }));
console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" }));

// Problem 2: Hipsterfy

function removeLastVowel(word) {
    const vowels = "aeiou";
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

function hipsterfy(sentence) {
    const words = sentence.split(" ");
    let hipsterfiedWords = [];
    for (let i = 0; i < words.length; i++) {
        hipsterfiedWords.push(removeLastVowel(words[i]));
    }
    return hipsterfiedWords.join(" ");
}

console.log("Problem 2: Hipsterfy");
console.log(hipsterfy("proper"));
console.log(hipsterfy("proper tonic panther"));
console.log(hipsterfy("towel flicker banana"));
console.log(hipsterfy("runner anaconda"));
console.log(hipsterfy("turtle cheeseburger fries"));

// Problem 3: Count Adjacent Sums
function countAdjacentSums(arr, n) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            sum++;
        }
    }
    return sum;
}

console.log("Problem 3: Count Adjacent Sums");
console.log(countAdjacentSums([1, 5, 1], 6));
console.log(countAdjacentSums([7, 2, 4, 6], 7));
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));

// Problem 4: Longest Letter Streak
function longestLetterStreak(str, searchLetters) {
    let longestWord = 0;
    let currentWord = 0;

    for (let i = 0; i < str.length; i++) {
        if (searchLetters.includes(str[i])) {
            currentWord++;
            if (currentWord > longestWord) {
                longestWord = currentWord;
            }
        } else {
            currentWord = 0;
        }
    }
    return longestWord;
}

console.log("Problem 4: Longest Letter Streak");
console.log(longestLetterStreak("ACCA", ["C"])); // 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); // 5

// Problem 5: In Pig Latin"
function inPigLatin(sentence) {
    let vowels = "aeiouAEIOU";
    let words = sentence.split(" ");
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstLetter = word[0];
        if (vowels.includes(firstLetter)) {
            newWords.push(word + "yay");
        } else {
            let firstVowelIndex = -1;
            for (let i = 0; i < word.length; i++) {
                if (vowels.includes(word[i])) {
                    firstVowelIndex = i;
                    break;
                }
            }
            if (firstVowelIndex >= 0) {
                let firstPart = word.slice(0, firstVowelIndex);
                let leftPart = word.slice(firstVowelIndex);
                let newWord = leftPart + firstPart + "ay";
                newWords.push(newWord.toLowerCase());
            } else {
                let newWord = word + "ay";
                newWords.push(newWord.toLowerCase());
            }
        }
    }
    newWords[0] = newWords[0][0].toUpperCase() + newWords[0].slice(1);
    return newWords.join(" ");
}

console.log("Problem 5: In Pig Latin");
console.log(inPigLatin("Shmanthony is the best teacher"));
console.log(inPigLatin("banana"));
console.log(inPigLatin("this is the time of my life"));
