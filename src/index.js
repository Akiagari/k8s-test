const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello, Kubernetes!');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else if (req.url === '/contact') {
    res.end('Contact Page');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
