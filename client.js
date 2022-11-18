// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //creating on object when the client connects to the server
  conn.on("connect", () => {
  });
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;a
};
module.exports = {connect,};