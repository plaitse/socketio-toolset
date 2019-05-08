// HTTP instead of express
const http = require("http");
const websocket = require("ws");

// Set HTTP server
const server = http.createServer((req, res) => {
  res.end("I am connected!");
});

// Set a server to accept a web socket traffic, and accept and send out data
const wss = new websocket.Server({ server });

wss.on("headers", (headers, req) => {
  console.log({ headers });
});

wss.on("connection", (ws, req) => {
  // Response to the new WebSocket()
  ws.send("Welcome to the websocket server");

  // Log any message from client
  ws.on("message", msg => {
    console.log({ msg });
  });
});

server.listen(8000);
