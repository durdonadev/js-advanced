const fs = require("fs");
const { v4: uuid } = require("uuid");

class Person {
    constructor(id, firstName, lastName, lastDigitOfSSN, expenses, incomes) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.lastDigitOfSSN = lastDigitOfSSN;
        this.expenses = expenses;
        this.incomes = incomes;
    }
}

class DataAnalyzer {
    readAll() {
        const content = fs.readFileSync("data.json", "utf-8");
        return JSON.parse(content);
    }

    updateAll(data) {
        fs.writeFileSync("data.json", JSON.stringify(data));
    }

    //Task 1: Assign Unique IDs
    assignmUniqueIds() {
        const content = this.readAll();

        for (const person in content) {
            content[person].id = uuid();
        }

        this.updateAll(content);
    }

    // Task 2: Add Utilities Expenses
    addUtilitiesExpenses() {
        const content = this.readAll();
        for (const person in content) {
            const { expenses } = content[person];
            for (const month in expenses) {
                const randomUtilityAmount =
                    Math.floor(Math.random() * (200 - 75 + 1)) + 75;
                expenses[month].utilities = randomUtilityAmount;
            }
        }
        this.updateAll(content);
    }

    // Task 3: Remove lastDigitOfSSN
    removeLastDigitOfSSN() {
        const content = this.readAll();
        for (const person in content) {
            delete content[person].lastDigitOfSSN;
        }
        this.updateAll(content);
    }

    // Task 4: Rename and Reduce Incomes
    renameAndReduceIncomes() {
        const content = this.readAll();
        for (const id in content) {
            const person = content[id];
            person.netIncomes = {};
            for (const month in person.incomes) {
                person.netIncomes[month] = person.incomes[month] * 0.75;
            }
            delete person.incomes;
        }
        this.updateAll(content);
    }

    // Task 5: Calculate and Add Total Expenses
    calculateAndAddTotalExpenses() {
        const content = this.readAll();

        for (const id in content) {
            const person = content[id];
            const monthlyExpenses = person.expenses;
            let expensesTotalSum = 0;

            for (const month in monthlyExpenses) {
                const expensesCategories = monthlyExpenses[month];
                for (const category in expensesCategories) {
                    expensesTotalSum += expensesCategories[category];
                }
            }

            person.totalExpenses = expensesTotalSum;
        }

        this.updateAll(content);
    }

    // Task 6: Calculate and Add Total Income
    calculateAndAddTotalIncome() {
        const content = this.readAll();

        for (const id in content) {
            const person = content[id];
            const monthlyIncomes = person.netIncomes;
            let incomesTotalSum = 0;

            for (const month in monthlyIncomes) {
                incomesTotalSum += monthlyIncomes[month];
            }

            person.totalIncome = incomesTotalSum;
        }

        this.updateAll(content);
    }

    // Task 7: Calculate and Add Min/Max Expenses
    calculateAndAddMinMaxExpenses() {
        const content = this.readAll();

        for (const id in content) {
            const person = content[id];
            const monthlyExpenses = person.expenses;
            let monthlyExpensesArr = [];
            let monthlyExpensesSum = 0;

            for (const month in monthlyExpenses) {
                const expensesCategories = monthlyExpenses[month];
                for (const category in expensesCategories) {
                    monthlyExpensesSum += expensesCategories[category];
                }
                monthlyExpensesArr.push(monthlyExpensesSum);
            }

            let foundMinExpenses = monthlyExpensesArr[0];
            let foundMaxExpenses = monthlyExpensesArr[0];
            for (let i = 0; i < monthlyExpensesArr.length; i++) {
                if (foundMaxExpenses < monthlyExpensesArr[i]) {
                    foundMaxExpenses = monthlyExpensesArr[i];
                }
                if (foundMinExpenses > monthlyExpensesArr[i]) {
                    foundMinExpenses = monthlyExpensesArr[i];
                }
            }

            person.minExpenses = foundMinExpenses;
            person.maxExpenses = foundMaxExpenses;
        }

        this.updateAll(content);
    }
}

const data = new DataAnalyzer();
// data.assignmUniqueIds();
// data.addUtilitiesExpenses();
// data.removeLastDigitOfSSN();
// data.renameAndReduceIncomes();
// data.calculateAndAddTotalExpenses();
// data.calculateAndAddTotalIncome();
data.calculateAndAddMinMaxExpenses();
