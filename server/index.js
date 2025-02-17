require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const port = process.env.PORT || 3001;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: corsOrigin,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected to server.`);

  socket.on("error", (error) => {
    console.error(`Socket error: ${error}`);
    // Handle the error appropriately
  });

  socket.on("join_room", (data) => {
    try {
      socket.join(data.room);
      console.log(`User ${socket.id} joined room ${data.room}`);
      socket.to(data.room).emit("user_joined", data);
    } catch (error) {
      console.error(`Error joining room: ${error}`);
      // Handle the error appropriately
    }
  });

  socket.on("send_message", (data) => {
    try {
      console.log(`${socket.id} has sent a message in room ${data.room}.`);
      socket.to(data.room).emit("receive_message", data);
    } catch (error) {
      console.error(`Error sending message: ${error}`);
      // Handle the error appropriately
    }
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected from server.`);
  });
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
