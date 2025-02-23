const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause an error if the request takes too long to process
  // and the request is aborted by the client.
  // It throws an error: 'ERR_STREAM_WRITE_AFTER_END'
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 10000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});