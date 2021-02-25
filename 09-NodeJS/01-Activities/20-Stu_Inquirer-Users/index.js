const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages',
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'comms',
        },
    ])
    .then((response) => {
        console.log(response);
        fs.appendFile('log.txt', `${response.username}\n`, (err) =>
            err ? console.error(err) : console.log('Commit logged!'));
    })