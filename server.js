require('dotenv').config();
// Require needed modules
const express = require('express');

// Initialize the app object
const app = express();

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log('this is not rendered in the browser - but you can see it in the terminal');
});