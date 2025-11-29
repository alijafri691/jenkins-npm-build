const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node app running through Jenkins!");
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
