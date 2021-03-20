const mysql = require('mysql');
const inquirer = require('inquirer')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASSWORD,
  database: 'top_songsdb',
});

// A query which returns all data for songs sung by a specific artist
// A query which returns all artists who appear within the top 5000 more than once
// A query which returns all data contained within a specific range
// A query which searches for a specific song in the top 5000 and returns the data for it

function artistDiscography() {
    inquirer.prompt({
        name: 'artist',
        type: 'input',
        message: 'What artist would you like to look up?'
    })
    .then((response) => {
        console.log(response)
        connection.query('SELECT * FROM top5000 WHERE artist =?', [`${response.artist}`], (err, res) => {
            if (err) throw err;
            console.log(res);
            connection.end();
        });
    })
    .catch((err) => {
        console.log('Error Detected: ', err)
    })
}


function init() {
    inquirer.prompt({
        name: 'queryType',
        type: 'list',
        message: 'What would you like to search for in the Top 1000 songs?',
        choices: ['Artist Discography', 'Artists Appearing Mores than Once', 'Songs by Year(s)', 'Song Information', 'Exit'],
    })
    .then((answer) => {
        if (answer.queryType === 'Artist Discography') {
            artistDiscography();
        } else if (answer.queryType === 'Artists Appearing Mores than Once') {
            artistDupe();
        } else if (answer.queryType === 'Songs by Year(s)') {
            songYear();
        } else if (answer.queryType === 'Song Information') {
            songYear();
        } else {
            connection.end();
        }
    });
}


connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    init();
  });
  