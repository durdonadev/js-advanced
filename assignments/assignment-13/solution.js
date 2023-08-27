// Problem 1
// Create a function called organizeBooks that takes an array of book objects as an argument. Each book object contains title, author, and genre. The function should return an object where each key is a genre and each value is an array of titles belonging to that genre.
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic"
    }
];

// console.log(books[1].genre);

function organizeBooks(books) {
    return books.reduce((acc, book) => {
        const { title, genre } = book;
        if (acc[genre]) {
            acc[genre].push(title);
        } else {
            acc[genre] = [title];
        }
        return acc;
    }, {});
}

// console.log(organizeBooks(books));

// Problem 2
// Create a function called vowelFrequency that takes an array of strings and returns an object that represents the frequency of each vowel (a, e, i, o, u) in all the words combined

function vowelFrequency1(words) {
    const allVowels = words
        .join("")
        .split("")
        .filter((char) => {
            return "aeiou".includes(char);
        });

    const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const char of allVowels) {
        if (vowels[char]) {
            vowels[char]++;
        } else vowels[char] = 1;
    }

    return vowels;
}

function vowelFrequency(words) {
    const vowelsCount = words
        .join("")
        .split("")
        .filter((char) => {
            return "aeiou".includes(char);
        })
        .reduce(
            (acc, char) => {
                if (acc[char]) {
                    acc[char]++;
                } else {
                    acc[char] = 1;
                }
                return acc;
            },
            { a: 0, e: 0, i: 0, o: 0, u: 0 }
        );
    return vowelsCount;
}

function vowelFrequencyWithoutFilter(words) {
    const vowels = ["a", "e", "i", "o", "u"];
    const chars = words.join("").split("");

    return chars.reduce(
        (acc, char) => {
            if (vowels.includes(char)) {
                acc[char]++;
            }
            return acc;
        },
        { a: 0, e: 0, i: 0, o: 0, u: 0 }
    );
}

const words = ["apple", "orange", "grape"];
// console.log(vowelFrequency(words));
// console.log(vowelFrequencyWithoutFilter(words));

// Problem 3
// Create a function called numericalAnalysis that takes an array of numbers as an argument. This function should return an object containing the sum of all numbers, the product of all numbers, and the count of negative numbers in the array.

function numericalAnalysis(numbers) {
    return numbers.reduce(
        (acc, num) => {
            acc.sum += num;
            acc.product *= num;
            if (num < 0) {
                acc.negativeCount++;
            }
            return acc;
        },
        { sum: 0, product: 1, negativeCount: 0 }
    );
}

const numbers = [1, -1, 2, -2, 3, -3];
// console.log(numericalAnalysis(numbers));
