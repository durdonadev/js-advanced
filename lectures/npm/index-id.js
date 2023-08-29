const { v4: uuid } = require("uuid");

const people = [
    { name: "A", age: "25", id: uuid() },
    { name: "B", age: "23", id: uuid() },
    { name: "C", age: "30", id: uuid() },
    { name: "D", age: "28", id: uuid() },
    { name: "A", age: "27", id: uuid() }
];

class People {
    static people = [];

    static all() {
        return People.people;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = uuid();

        People.people.push(this);
    }
}

new Person("A", 24);
new Person("B", 24);
console.log(People.all());
