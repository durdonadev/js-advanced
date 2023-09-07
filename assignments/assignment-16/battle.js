const Pokemon = require("./pokemon");
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const electricTypeMoves = [
    { name: "Tackle", damage: 3 },
    { name: "Thunder Shock", damage: 4 },
    { name: "Charge Beam", damage: 5 },
    { name: "Thunder Wave", damage: 5 },
    { name: "Spark", damage: 7 },
    { name: "Thunder Punch", damage: 8 },
    { name: "Shock Wave", damage: 10 },
    { name: "Thunder Bolt", damage: 15 },
    { name: "Thunder", damage: 20 },
    { name: "Zap Cannon", damage: 30 },
    { name: "Electric Beam", damage: 35 }
];
const leafTypeMoves = [
    { name: "Absorb", damage: 2 },
    { name: "Tackle", damage: 3 },
    { name: "Bullet Seed", damage: 4 },
    { name: "Mega Drain", damage: 6 },
    { name: "Vine Whip", damage: 8 },
    { name: "Razor Leaf", damage: 15 },
    { name: "Giga Drain", damage: 18 },
    { name: "Seed Bomb", damage: 22 },
    { name: "Petal Dance", damage: 25 },
    { name: "Solar Beam", damage: 35 }
];

// for testing
const pikachu = new Pokemon("pikachu", "Electric", 10, electricTypeMoves);
const bulbasaur = new Pokemon("bulbasaur", "leaf", 11, leafTypeMoves);
// console.log(pikachu);
// console.log(bulbasaur);

class Battle {
    constructor(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.turn = true;
    }

    switchTurn() {
        this.turn = !this.turn;
    }

    fight() {
        if (this.turn) {
            this.pokemon1.attack(this.pokemon2);
        } else {
            this.pokemon2.attack(this.pokemon1);
        }

        this.switchTurn();
    }

    potion() {
        let currentPokemon;
        if (this.turn) {
            currentPokemon = this.pokemon1;
        } else {
            currentPokemon = this.pokemon2;
        }
        currentPokemon.hp += 10;
        console.log(
            `Used potion on ${currentPokemon.name} ${currentPokemon.hp}!`
        );
    }

    run() {
        let currentPokemon;
        if (this.turn) {
            currentPokemon = this.pokemon1;
        } else {
            currentPokemon = this.pokemon2;
        }
        currentPokemon.hp = 0;
        console.log(`${currentPokemon.name} ran ${currentPokemon.hp}!!`);
    }

    won() {
        return (
            this.pokemon1.faint() ||
            this.pokemon2.faint() ||
            (this.pokemon1.faint() && this.pokemon2.faint())
        );
    }

    results() {
        if (this.pokemon1.hp > this.pokemon2.hp) {
            console.log(`Winner: ${this.pokemon1.name}`);
            console.log(`${this.pokemon1.call()}`);
        } else {
            console.log(`Winner: ${this.pokemon2.name}`);
            console.log(`${this.pokemon2.call()}`);
        }
    }

    promptUser() {
        let currentPokemon;
        if (this.turn === true) {
            currentPokemon = this.pokemon1;
        } else {
            currentPokemon = this.pokemon2;
        }
        reader.question(
            `What should ${currentPokemon.name} do? Select 'a' for attack, 'p' for potion, 'r' for run: `,
            (userInput) => {
                this.makeMove(userInput);
            }
        );
    }

    makeMove(userInput) {
        if (userInput === "a") {
            this.fight();
        }
        if (userInput === "p") {
            this.potion();
        }
        if (userInput === "r") {
            this.run();
        }
        if (!this.won()) {
            this.switchTurn(); // Switch turns
            this.promptUser(); // Continue prompting
        } else {
            this.results();
            reader.close();
        }
    }

    play() {
        this.promptUser();
    }
}

const battle = new Battle(pikachu, bulbasaur);
// battle.fight();
// battle.potion();
// battle.run();
// battle.won(); // it works, you can check with console.log.
// battle.results();
// battle.promptUser();
battle.play();
