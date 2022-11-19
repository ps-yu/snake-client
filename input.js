const { keys } = require("./constants");

//Stores the active TCP connection object.
let connection;



// setup interface to handle user input from stdin

const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  connection.write('Say: Go eat')
  if (key === '\u0003') {
    process.exit();
  }
  for (const k in keys){
    if (k === key){
      connection.write(keys[k]);
    }
  }
};

module.exports = setupInput