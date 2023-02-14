const { createReadStream } = require('fs');
const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(' Hello World ' );
  createReadStream('clock.html').pipe(res)
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

