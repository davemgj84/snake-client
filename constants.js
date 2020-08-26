// File for store our Constants for Snake Game:

// Constants for IP and PORT:
const IP = '135.23.222.131';

const PORT = 50542;

// constant for user id name:
const userId = 'Name: DMJ';

// Created an object of user responses(input), for movement and messages:
const responses = {
  'w': 'Move: up',
  's': 'Move: down',
  'a': 'Move: left',
  'd': 'Move: right',
  'e': 'Say: Ssssssssss',
  'r': 'Say: David the Snake!',
  'q': 'Say: ssssssssssmooth!'
}

// Exports all constants as and object:
module.exports = {
  IP,
  PORT,
  userId,
  responses
};