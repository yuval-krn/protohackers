import * as net from "net";

function newConn(socket: net.Socket): void {
  console.log("new connection!");
  socket.on("data", (data: Buffer) => {
    socket.write(data);
    socket.end();
  });
}
const server = net.createServer();
server.on("connection", newConn);
server.listen({ host: "127.0.0.1", port: 1234 });
