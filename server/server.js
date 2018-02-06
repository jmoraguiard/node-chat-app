// Use path and http libraries from node.js
const path = require('path');
const http = require('http');
// Use express library for developing web apps (remember to call npm i --save express)
const express = require('express');
// Load socket.io
const socketIO = require('socket.io');

// Create the path to the public folder
const publicPath = path.join(__dirname + '/../public');
// Set Heroku environment variables
const port = process.env.PORT || 3000;
// Create a express application variable
var app = express();
// create a server using the express app
var server = http.createServer(app);

// Make it serve by default public directory
app.use(express.static(publicPath));

// Configure it to listen to port 3000
server.listen(port, () => {
  console.log(`Server is up and running in port ${port}.`);
});
