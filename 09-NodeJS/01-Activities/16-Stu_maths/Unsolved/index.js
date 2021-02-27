// TODO: Import `maths.js`
const maths = require("./maths.js")
// console.log(maths)

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

let operation = process.argv[2];
let numOne = parseInt(process.argv[3]);
let numTwo = parseInt(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch(operation) {
    case "sum":
        console.log(maths.sum(numOne, numTwo));
        return;
    case "difference":
        console.log(maths.difference(numOne, numTwo));
        return;
    case "product":
        console.log(maths.product(numOne, numTwo));
        return;
    case "quotient":
        console.log(maths.quotient(numOne, numTwo));
        return;
    default:
        console.log("I don't recognize that command.")
}


// if (process.argv[2] === "sum"){
//     const result = maths.sum(parseInt(process.argv[3]), parseInt(process.argv[4]))
//     console.log(result)
// }
// else if (process.argv[2] === "difference"){
//     const result = maths.difference(parseInt(process.argv[3]), parseInt(process.argv[4]))
//     console.log(result)
// }