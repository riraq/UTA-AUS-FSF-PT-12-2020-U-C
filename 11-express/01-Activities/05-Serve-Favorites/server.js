// Dependencies
const http = require('http');
const fs = require('fs');

// Set our port to 8080
const PORT = 8080;

const home = (res) => {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

const foods = (res) => {
  fs.readFile(`${__dirname}/favorite-foods.html`, (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};

const movies = (res) => {
  fs.readFile(`${__dirname}/favorite-movies.html`, (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};

const frameworks = (res) => {
  fs.readFile(`${__dirname}/favorite-frameworks.html`, (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

const display404 = (url, res) => {
  const myHTML = `
  <html>
    <body>
      <h1>404 Not Found </h1>
      <p>The page you were looking for: ${url} can not be found</p>
    </body>
  </html>`;

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { 'Content-Type': 'text/html' });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
};

// Create a function for handling the requests and responses coming into our server
const handleRequest = (req, res) => {
  // Capture the url the request is made to
  const path = req.url;
  console.log(path)
  // Depending on the URL, display a different HTML file.
  switch (path) {
    case '/index.html':
      return home(res);

    case '/favorite-foods.html':
      return foods(res);

    case '/favorite-movies.html':
      return movies(res);

    case '/favorite-frameworks.html':
      return frameworks(res);

    default:
      return display404(path, res);
  }
};

// Create our server
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
