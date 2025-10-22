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
server.listen({ host: "0.0.0.0", port: 1234 });
