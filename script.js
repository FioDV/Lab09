function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

// Prototype method to gain experience points and level up if necessary
Player.prototype.gainXp = function(xp) {
    if (xp >= 1 && xp <= 10) {
        this.points += xp;
        
        // Check if points are enough to level up
        while (this.points >= 10) {
            this.lvl += 1;
            this.points -= 10;
        }
    } else {
        console.log("Invalid XP amount. Please provide a number between 1 and 10.");
    }
};

// Prototype method to display player stats
Player.prototype.describe = function() {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
};

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points