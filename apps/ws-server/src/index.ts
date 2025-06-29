import { WebSocketServer } from "ws";
const { client } = require("@repo/db/client");

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", async (socket) => {
  const user = await client.user.create({
    data: {
      username: "testuser",
      password: "testpassword",
    },
  });
  console.log("New client connected:", user.username);

  socket.send("Hii there you are connected to the server!");
});
