// Setup User Interface
// Specifically, so that we can handle user input via stdin

const { responses } = require('./constants');

// Had to bring in connect() then name it to a variable so that I could use conn.write for user Input
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

// Handles user input and allows for 'Ctrl + C' to exit:
const handleUserInput = function(key) {
  let conn = connection;
  if (key === '\u0003') {
    process.exit();
  }
  for (letter in responses) {
    if (letter === key) {
      conn.write(responses[letter]);
    }
  }
};

module.exports = { setupInput };

// stdin.addListener('data', handleUserInput); <---- This also works instead of using stdin.on('data', handleUserInput);
// not sure if one is prefered over the other - .addListener() seems more human readable compared to .on()