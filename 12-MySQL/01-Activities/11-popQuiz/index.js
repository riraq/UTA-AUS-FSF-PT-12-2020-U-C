const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASSWORD,
  database: 'popQuiz',
});

const readProducts = () => {
    console.log('Selecting all rows...\n');
    connection.query('SELECT * FROM popQuizTable', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  };


connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    readProducts();
  });
  