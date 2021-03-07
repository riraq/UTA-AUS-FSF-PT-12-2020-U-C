// TODO: Import the parent class
const Vehicle = require('./vehicle')
// TODO: Create a `Boat` class that extends the `Vehicle` class

class Boat extends Vehicle {
  constructor(boatWheels, boatSound){
    const numberOfWheels = boatWheels;
    const sound = boatSound;

    super(numberOfWheels, sound);
    this.boatWheels = boatWheels
    this.boatSound = boatSound
  }
}

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useHorn();
boat.crewSoundOff();
