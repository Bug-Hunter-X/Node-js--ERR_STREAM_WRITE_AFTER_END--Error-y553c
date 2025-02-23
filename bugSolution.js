const http = require('http');

const server = http.createServer((req, res) => {
  let isWritable = true;

  res.on('finish', () => {
    isWritable = false;
  });

  setTimeout(() => {
    if (isWritable) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 10000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});