// Setup User Interface
// Specifically, so that we can handle user input via stdin

// Had to bring in connect() then name it to a variable so that I could use conn.write for user Input
const { connect } = require('./client');
const conn = connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

// Handles user input and allows for 'Ctrl + C' to exit:
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    conn.write('Move: up');
  }
  if (key === 'a') {
    conn.write('Move: left');
  }
  if (key === 's') {
    conn.write('Move: down');
  }
  if (key === 'd') {
    conn.write('Move: right');
  }
};

module.exports = { setupInput };

// stdin.addListener('data', handleUserInput); <---- This also works instead of using stdin.on('data', handleUserInput);
// not sure if one is prefered over the other - .addListener() seems more human readable compared to .on()