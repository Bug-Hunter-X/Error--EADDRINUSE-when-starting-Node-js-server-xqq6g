const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

function startServer(port) {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use, retrying in 1 second...`);
      setTimeout(() => startServer(port), 1000); // Retry after a delay
    } else {
      console.error(`Failed to start server: ${err}`);
    }
  });
}

const port = 8080;
startServer(port); 