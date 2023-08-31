const fs = require("fs");
const { v4: uuid } = require("uuid");

// [
//     {
//         task: "Cleaning",
//         status: "Done",
//         id: 1
//     },
//     {
//         task: "Cleaning",
//         status: "In progress",
//         id: 1
//     }
// ];

class Todo {
    constructor(task) {
        this.task = task;
        this.status = "Doing";
        this.id = uuid();
    }
}

class Todos {
    readAll() {
        const content = fs.readFileSync("data.json", "utf-8");
        return JSON.parse(content);
    }

    addTodo(todo) {
        const todos = this.readAll();
        todos.push(todo);
        fs.writeFileSync("data.json", JSON.stringify(todos));
    }

    updateAll(todos) {
        fs.writeFileSync("data.json", JSON.stringify(todos));
    }

    complete(id) {
        const content = this.readAll();

        for (const todo of content) {
            if (todo.id === id) {
                todo.status = "Done";
                break;
            }
        }

        this.updateAll(content);
    }

    delete(id) {
        const content = this.readAll();
        const fiteredContent = content.filter((todo) => todo.id !== id);
        this.updateAll(fiteredContent);
    }

    updateTask(id, text) {
        const todos = this.readAll();

        for (const todo of todos) {
            if (todo.id === id) {
                todo.task = text;
                break;
            }
        }
        this.updateAll(todos);
    }

    // summarize() {
    //     const todos = this.readAll();

    //     const summarizedTodos = todos.reduce(
    //         (acc, todo) => {
    //             const status = todo.status;

    //             if (acc[status] === "Todo") {
    //                 acc.Todo;
    //             } else if (acc[status] === "In Progress") {
    //                 acc["In Progress"]++;
    //             } else if (acc[status] === "Done") {
    //                 acc.Done++;
    //             }

    //             return acc;
    //         },
    //         {
    //             Done: 0,
    //             Todo: 0,
    //             "In Progress": 0
    //         }
    //     );
    //     return summarizedTodos;
    // }

    summarize() {
        const todos = this.readAll();
        let todoStatus = 0;
        let doneStatus = 0;

        for (const todo of todos) {
            if (todo.status === "Doing") {
                todoStatus++;
            } else if (todo.status === "Done") {
                doneStatus++;
            }
        }
        return {
            Done: doneStatus,
            Todo: todoStatus
        };
    }
}

const todo = new Todo();
const todos = new Todos();

// todo.write({
//     task: "Watching TV",
//     status: "In Progress",
//     id: uuid()
// });

// console.log(todo.read());

// todo.complete("d711e4e1-79ad-44a2-bb6c-b2ef7a8666a0");

// todo.delete("429c7705-c310-436a-aa6d-ff3c37ea4b65");

// todo.updateTask("d711e4e1-79ad-44a2-bb6c-b2ef7a8666a0", "Watching Movie");

todos.summarize();
