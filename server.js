const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// routes
const users = require('./controllers/usersController');
app.use('/api/users', users);

app.listen(port);
console.log('Running on ' + port);
