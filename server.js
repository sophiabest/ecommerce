const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure neat the top
require('dotenv').config();
// Connect to the database (after the dotenv)
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify the token and assign
// a user object to the req object
app.use(require('./config/checkToken'));

// API routes here
app.use('/api/users', require('./routes/api/users'));

//protect routes
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/products', ensureLoggedIn, require('./routes/api/products'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// "Catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});