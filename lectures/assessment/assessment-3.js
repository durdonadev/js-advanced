//Problem 1 Create a function named transformBooks with the following specifications:
// Input: Takes an array of arrays where each sub-array represents a collection of books in a library's section, all belonging to the same genre. Each book is represented as an object with the following properties:
// title: String, the title of the book.
// author: String, the author's name.
// genre: String, the genre of the book.
// rating: Number, the rating of the book on a scale of 1 to 5.

function transformBooks(librarySections) {
    const transformatedSections = librarySections.map((section) => {
        const transformatedBooks = section.map((book) => {
            return {
                title: book.title,
                author: book.author,
                genre: book.genre,
                rating: book.rating
            };
        });
        return transformatedBooks;
    });
    return transformatedSections;
}

const library = [
    [
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            genre: "Fantasy",
            rating: 4.5
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.2
        },
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 4.3
        }
    ],
    [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            rating: 4.8
        },
        {
            title: "1984",
            author: "George Orwell",
            genre: "Fiction",
            rating: 4.0
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            genre: "Fiction",
            rating: 4.1
        }
    ],
    [
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            genre: "Science",
            rating: 4.7
        },
        {
            title: "The Selfish Gene",
            author: "Richard Dawkins",
            genre: "Science",
            rating: 4.4
        }
    ]
];

// const transformedSections = transformBooks(library);
// transformedSections.forEach((section, index) => {
//     console.log(`Section ${index + 1}:`, section);
// });

// Problem 2
// Create a function named filterBooks with the following specifications:
// Use .filter method
// Input: The function will accept the following four arguments:
// books: An array of book objects, each having:
// title: String, the title of the book.
// author: String, the author's name.
// genre: String, the genre of the book.
// rating: Number, the rating of the book on a scale of 1 to 5.
// publishedYear: Number, the year the book was published.
// genreFilter: String, the genre to filter by.
// ratingThreshold: Number, the minimum rating to filter by (inclusive).
// yearRange: An array of two numbers, the range of publication years to filter by (inclusive).
// Filtering Criteria: The function must filter books based on the following conditions provided as arguments:
// Genre: Must match the specified genreFilter.
// Rating: Must have a rating greater than or equal to ratingThreshold.
// Publication Year: Must have a publication year within yearRange.
// Output: Returns a new array of objects, including the title and author of the filtered books.

function filterBooks(books, genreFilter, ratingThreshold, yearRange) {
    return books
        .filter(
            (book) =>
                book.genre === genreFilter &&
                book.rating >= ratingThreshold &&
                book.publishedYear >= yearRange[0] &&
                book.publishedYear <= yearRange[1]
        )
        .map((book) => ({
            title: book.title,
            author: book.author
        }));
}

const books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        rating: 4.5,
        publishedYear: 1997
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        genre: "Science",
        rating: 4.7,
        publishedYear: 1988
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        rating: 4.8,
        publishedYear: 1951
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Fiction",
        rating: 4.1,
        publishedYear: 1932
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Classics",
        rating: 4.5,
        publishedYear: 1813
    }
    // ... Additional books ...
];

const filteredBooks = filterBooks(books, "Fiction", 4.0, [1900, 2000]);

// console.log(filteredBooks);

// Problem 3
// Create a function named createInventorySystem that encapsulates a private collection of items and provides public methods to manage this collection.
// Private Data: In the outer function, define a private array to hold the items. Each item is a string representing an individual product.
// Public Methods: Provide public methods to interact with this private collection:
// addItem(item): Adds an item to the collection.
// removeItem(item): Removes an item from the collection.
// getItems(): Retrieves all items from the collection.
// Return Value: The function should return an object containing the public methods that allow interaction with the private data.

function createInventorySystem() {
    const itemsArr = [];

    return {
        addItem(item) {
            itemsArr.push(item);
        },
        removeItem(item) {
            const index = itemsArr.indexOf(item);
            if (index !== null) {
                itemsArr.splice(index, 1);
            }
        },
        getItems() {
            return itemsArr;
        }
    };
}

const inventorySystem = createInventorySystem();

inventorySystem.addItem("Apple");
inventorySystem.addItem("Banana");
const items = inventorySystem.getItems();
// console.log(items);

inventorySystem.removeItem("Apple");
const updatedItems = inventorySystem.getItems();
// console.log(updatedItems);

// Problem 4
// Introduction:
// Tic-Tac-Toe is a classic two-player game played on a 3x3 grid.

// Problem Statement:
// Task: Write a function named checkWinner to determine if there's a winner in a given Tic-Tac-Toe game board.

// Input: An array of 9 elements representing the Tic-Tac-Toe board, where:
// The first 3 elements represent the first row.
// The next 3 elements represent the second row.
// The last 3 elements represent the third row.
// Each element is either "X", "O", or an empty string "", representing an unmarked square.
// Output: Returns the winner ("X" or "O") if there is one, or null if there's no winner.
// Winning Conditions: Check for a winner based on three symbols in a row horizontally, vertically, or diagonally.

function checkWinner(gameBoard) {
    const rowColumnDiagonal = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < rowColumnDiagonal.length; i++) {
        const [a, b, c] = rowColumnDiagonal[i];
        if (
            gameBoard[a] &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[a] === gameBoard[c]
        ) {
            return gameBoard[a];
        }
    }
    return null;
}

const gameBoard = ["X", "O", "X", "X", "X", "O", "O", "O", "O"];

console.log(checkWinner(gameBoard));
