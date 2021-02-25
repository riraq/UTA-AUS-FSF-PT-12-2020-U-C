// TODO: What are we importing?
// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
// All file system operations have synchronous, callback, and promise-based forms.

const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);