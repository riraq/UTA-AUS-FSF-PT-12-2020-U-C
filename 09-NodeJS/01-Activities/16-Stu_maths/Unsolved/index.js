// TODO: Import `maths.js`
const maths = require("./maths.js")
// console.log(maths)

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
if (process.argv[2] === "sum"){
    const result = maths.sum(parseInt(process.argv[3]), parseInt(process.argv[4]))
    console.log(result)
}
else if (process.argv[2] === "difference"){
    const result = maths.difference(parseInt(process.argv[3]), parseInt(process.argv[4]))
    console.log(result)
}


// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
