const pluralize = require("pluralize");

const people = [
    { name: "A", age: "25" },
    { name: "B", age: "23" },
    { name: "C", age: "30" },
    { name: "D", age: "28" }
];

// const pluralize = (string, count) => {
//     if (count >= 2) {
//         return `${string}s`;
//     }
//     return string;
// };

const getUnder25 = (people) => {
    const count = people.reduce((acc, person) => {
        if (person.age <= 25) {
            return acc + 1;
        }
        return acc;
    }, 0);

    console.log(`There are ${count} ${pluralize("person", count)} under 25.`);
};

getUnder25(people);
