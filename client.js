// Multi-Player Snake Game : Client setup:

const net = require('net');

// Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // once established connection - prints message. Also writes or sends data back to server with name.
  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: DMJ");
    // conn.write("Move: up");
  });

  // an event handler to handle incoming data.
  // console log it for the player
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = connect;

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)