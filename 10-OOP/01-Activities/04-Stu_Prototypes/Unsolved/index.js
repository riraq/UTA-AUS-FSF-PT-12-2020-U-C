// TODO: Add a comment describing what kind of function this is
// constructor function
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// adds another method to the Character constructor for all future code
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
// adds a method to the Character constructor, which is a function, that if hitpoints is greater than 0, console log "is still alive"; otherwise, console log "has died"
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
// adds a method to the Character constructor, which is a function, takes away hitpoints from the other character
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// adds a method to the Character constructor, which is a function, and levels up the characters stats
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
// prints that stats
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
// prints whether the warrior is still alive; levels up the rogue
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
// prints that stats
rogue.printStats();
