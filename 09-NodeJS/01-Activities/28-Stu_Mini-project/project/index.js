const inquirer = require('inquirer');
const fs = require('fs');

// music should be an object with title, artist, and album properties
const music = {
    // code here
    title: "Mr. Brightside",
    artist: "The Killers",
    album: "Hot Fuss"
  };
  
  // Write code between the <div> tags to output the data from the music object above.
  // Use an h2 element for the title and a p element for artist and title
  const songSnippet = `
    <div class="song">
      <h2>${music.title}</h2>
      <p>${music.artist}</p>
      <p>${music.album}</p>
    </div>
  `;
  
  const element = document.getElementById("music");
  element.innerHTML = songSnippet;
  
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Template Literals</title>
</head>
<body>
  <div id="music"></div>

<script type="text/javascript" src="index.js"></script>
</body>
</html>
`;


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