// Phase 1
function Pokemon(name, type, level = 5) {
    this.name = name.toUpperCase();
    this.type = type[0].toUpperCase() + type.slice(1).toLowerCase();
    this.level = level;
    this.hp = Math.floor(level * 2.25);
}

let pikachu = new Pokemon("PIKACHU", "Electric", 10);
let bulbasaur = new Pokemon("bulbasaur", "leaf", 11);
let onyx = new Pokemon("onyx", "rock");

// Phase 2
Pokemon.prototype.levelUp = function () {
    this.level++;
    this.hp = Math.floor(this.level * 2.25);
    return this;
};

Pokemon.prototype.faint = function () {
    return this.hp <= 0;
};

Pokemon.prototype.revive = function () {
    this.hp = Math.floor(this.level * 2.25);
    return this;
};

Pokemon.prototype.call = function () {
    const vowels = ["A", "E", "I", "O", "U"];
    let nickname = this.name;
    let vowelCount = 0;

    for (let i = 0; i < this.name.length; i++) {
        if (vowels.includes(this.name[i])) {
            vowelCount++;
            if (vowelCount === 2) {
                nickname = this.name.slice(0, i + 1);
            }
        }
    }
    return nickname + "-" + nickname;
};

// console.log(pikachu);
// console.log(bulbasaur);
// console.log(onyx);

// pikachu.hp -= 5;
// console.log(pikachu.faint()); // false

// console.log(pikachu.revive()); // { name: 'PIKACHU', type: 'Electric', level: 10, hp: 22 }

// console.log(pikachu.levelUp()); // { name: 'PIKACHU', type: 'Electric', level: 11, hp: 24 }

// console.log(pikachu.call()); // "PIKA-PIKA"
// console.log(bulbasaur.call()); // "BULBA-BULBA"
// console.log(onyx.call()); // "ONYX-ONYX"

// Phase 3
function Pokemon(name, type, moves, level = 5) {
    this.name = name.toUpperCase();
    this.type = type[0].toUpperCase() + type.slice(1).toLowerCase();
    this.level = level;
    this.hp = Math.floor(level * 2.25);
    this.moves = moves;
}

let electricTypeMoves = [
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

let leafTypeMoves = [
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

let rockTypeMoves = [
    { name: "Tackle", damage: 3 },
    { name: "Rollout", damage: 6 },
    { name: "Rock Blast", damage: 4 },
    { name: "Smack Down", damage: 10 },
    { name: "Rock Throw", damage: 20 },
    { name: "Rock Slide", damage: 30 },
    { name: "Head Smash", damage: 40 },
    { name: "Rock Wrecker", damage: 50 }
];
pikachu = new Pokemon("PIKACHU", "Electric", electricTypeMoves, 10);
bulbasaur = new Pokemon("bulbasaur", "leaf", leafTypeMoves, 11);
onyx = new Pokemon("onyx", "rock", rockTypeMoves);

Pokemon.prototype.availableMoves = function () {
    const maxLevel = 50;
    const levelFraction = this.level / maxLevel;
    const availableMovesCount = Math.floor(this.moves.length * levelFraction);
    const movesResult = this.moves.slice(0, Math.max(availableMovesCount, 1));
    return movesResult;
};

// console.log(pikachu.moves);
// console.log(pikachu.level / 50);
// console.log(pikachu.availableMoves());
// console.log(bulbasaur.availableMoves());
// console.log(onyx.availableMoves());

Pokemon.prototype.attack = function (opponent, moveName) {
    let selectedMove = this.moves[0]; // By default, use the first move if moveName is not provided or found
    if (moveName) {
        // If moveName is provided, find the corresponding move
        selectedMove = this.moves.find((move) => move.name === moveName);
    }

    // If the move is not found, use the first move as a fallback
    if (!selectedMove) {
        selectedMove = this.moves[0];
    }

    const damage = selectedMove.damage;
    opponent.hp -= damage;

    console.log(`${this.name} attacked with ${selectedMove.name}!`);
    console.log(`Damage to ${opponent.name}: ${damage}`);
    console.log(`${this.name} hp: ${this.hp}`);
    console.log(`${opponent.name} hp: ${opponent.hp <= 0 ? 0 : opponent.hp}`);
};

// pikachu.attack(bulbasaur, "Tackle");
// bulbasaur.attack(pikachu, "Absorb");
// onyx.attack(pikachu);
