// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade
      switch (input) {
        case inRange(input, 90, 100):
          return "A";
        case inRange(input, 80, 89):
          return "B";
        case inRange(input, 70, 79):
          return "C";
        case inRange(input, 60, 69):
          return "D";
        case inRange(input, 0, 59):
          return "F";
      }
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      switch (input) {
        case "A":
          response = "90 - 100";
          break;
        case "B":
          response = "80 - 89";
          break;
        case "C":
          response = "70 - 79";
          break;
        case "D":
          response = "60 - 69";
          break;
        case "F":
          response = "0 - 79";
          break;
        default:
          response = "0";
          break
      }
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
