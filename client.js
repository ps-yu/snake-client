// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //Sending the username to the server
  conn.on("connect", () => {
    conn.write("Name: ps1");
   });
  

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};
module.exports = connect;