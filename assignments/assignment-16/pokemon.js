function Pokemon(name, type, level = 5, moves) {
    this.name = name.toUpperCase();
    this.type = type[0].toUpperCase() + type.slice(1).toLowerCase();
    this.level = level;
    this.moves = moves;
    this.hp = Math.floor(level * 2.5);
    this.availableMoves = this.getAvailableMoves();
}
Pokemon.prototype.levelUp = function () {
    this.level++;
    this.hp = Math.floor(this.hp * this.level);
    this.availableMoves = this.getAvailableMoves();
    return this;
};
Pokemon.prototype.faint = function () {
    return this.hp <= 0;
};
Pokemon.prototype.revive = function () {
    this.hp = Math.floor(this.level * 2.5);
    return this;
};
Pokemon.prototype.call = function () {
    const vowels = "aeiou".split("");
    let counter = 0;
    let i = 0;
    while (i < this.name.length) {
        if (vowels.includes(this.name[i].toLowerCase())) {
            counter++;
            if (counter === 2) break;
        }
        i++;
    }
    const nickname = this.name.slice(0, i + 1);
    return [nickname, nickname].join("-");
};
Pokemon.prototype.getAvailableMoves = function () {
    const fraction = this.level / 50;
    const proportion = Math.ceil(this.moves.length * fraction);
    const availableMoves = this.moves.slice(0, proportion);
    if (availableMoves.length === 0) {
        return [this.moves[0]];
    }
    return availableMoves;
};
Pokemon.prototype.attack = function (opponent, moveName) {
    const availableMoves = this.availableMoves;
    let move = availableMoves[availableMoves.length - 1];
    if (moveName !== undefined) {
        for (let i = 0; i < availableMoves.length; i++) {
            if (moveName === availableMoves[i].name) {
                move = availableMoves[i];
                break;
            }
        }
    }
    opponent.hp -= move.damage;
    console.log(`${this.name} attacks with ${move.name}`);
    console.log(`Damage to ${opponent.name}: ${move.damage}`);
    console.log(`${this.name} hp: ${this.hp}`);
    console.log(`${opponent.name} hp: ${opponent.hp}`);
};

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

module.exports = Pokemon;
