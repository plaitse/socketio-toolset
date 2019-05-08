// HTTP instead of express
const http = require("http");
const socketio = require("socket.io");

// Set HTTP server
const server = http.createServer((req, res) => {
  res.end("I am connected!");
});

const io = socketio(server);

io.on("connection", (socket, req) => {
  // send() becomes emit() with Socket.io
  socket.emit("welcome", "Welcome to the websocket server");

  // No change here
  socket.on("message", msg => {
    console.log({ msg });
  });
});

server.listen(8000);
