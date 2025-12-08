import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//event handler
wss.on("connection", function (socket) {
  setInterval(() => {
    socket.send("hi there"); //server is sending the message
  }, 5000);

  socket.on("message", (e) => {        //client is sending the message
    console.log(e.toString);
  });
});
