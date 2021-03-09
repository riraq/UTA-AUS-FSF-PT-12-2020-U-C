const http = require('http');

const PORT = 8080;

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
const displayFood = (res) => {
  const myHTML = `
  <html>
    <body>
      <h1>Favorite Foods</h1>
      <h2>pizza</h2>
      <h2>sushi</h2>
      <h2>burgers</h2>
      <h2>pasta</h2>
      <a href='/'>Go Home</a>
      <a href='/favorite-movies'>Favorite Movies</a>
      <a href='/favorite-css'>Favorite CSS Frameworks</a>
    </body>
  </html>`;

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
};

// When someone visits the "http://localhost:8080/" path, this function is run.
const displayRoot = (res) => {
  const myHTML = `
  <html>
    <body>
      <h1>Home Page</h1>
      <a href='/favorite-foods'>Favorite Foods</a>
      <a href='/favorite-movies'>Favorite Movies</a>
      <a href='/favorite-css'>Favorite CSS Frameworks</a>
    </body>
  </html>`;

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
};

const displayMovie = (res) => {
  const myHTML = `
  <html>
    <body>
      <h1>Favorite Movies</h1>
      <h2>I Love You Man</h2>
      <h2>Batman</h2>
      <h2>Star Wars</h2>
      <a href='/'>Home</a>
      <a href='/favorite-foods'>Favorite Foods</a>
      <a href='/favorite-css'>Favorite CSS Frameworks</a>
    </body>
  </html>`;

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
};

const displayCSS = (res) => {
  const myHTML = `
  <html>
    <body>
      <h1>Favorite CSS Frameworks</h1>
      <h2>Bootstrap</h2>
      <h2>Bulma</h2>
      <a href='/'>Home</a>
      <a href='/favorite-foods'>Favorite Foods</a>
      <a href='/favorite-movies'>Favorite Movies Frameworks</a>
    </body>
  </html>`;

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
};

// When someone visits any path that is not specifically defined, this function is run.
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

// Create a function which handles incoming requests and sends responses

const handleRequest = (req, res) => {
  // Capture the url the request is made to
  const path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {
    case '/':
      return displayRoot(res);

    case '/favorite-foods':
      return displayFood(res);

    case '/favorite-movies':
      return displayMovie(res);

    case '/favorite-css':
      return displayCSS(res);

    default:
      return display404(path, res);
  }
};

// Assign our createServer method to a variable called "server"
const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, () => {
  // Callback triggered when server is successfully listening. Hurray!
  console.log(`Server listening on: http://localhost:${PORT}`);
});
