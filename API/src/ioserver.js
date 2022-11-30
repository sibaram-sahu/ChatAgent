const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);

app.use(express.urlencoded({extended: true}))
app.use(express.json());

let io;
function ioServer() {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  return io;
}

function getIO() {
  return io;
}

module.exports = {
  ioServer,
  app,
  server,
  getIO
};