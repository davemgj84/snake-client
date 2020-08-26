// Multi-Player Snake Game :
const { connect } = require('./client');
const { setupInput } = require('./input');

connect();
console.log('Connecting ...');

setupInput();