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
  switch(key){
    case 'w':
      connection.write('Move: up')
      break;
    case 'a':
      connection.write('Move: left')
      break;
    case 's':
      connection.write('Move: down')
      break;
    case 'd':
      connection.write('Move: right')
      break;
  }
};

module.exports = setupInput