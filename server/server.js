// Use path library from node.js
const path = require('path');
// Use express library for developing web apps (remember to call npm i --save express)
const express = require('express');

// Create the path to the public folder
const publicPath = path.join(__dirname + '/../public');

// Set Heroku environment variables
const port = process.env.Port || 3000;

// Create a express application variable
var app = express();

// Make it serve by default public directory
app.use(express.static(publicPath));

// Configure it to listen to port 3000
app.listen(port, () => {
  console.log(`Server is up and running in port ${port}.`);
});
