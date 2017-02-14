const User = require('../models/user');

const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
  res.json({ message: 'this is signup' });
});

// app.post('/signup', (req, res) => {
//   res.render('users/');
// });

router.get('/login', function(req, res) {
  res.json({ message: 'this is login' });
});

module.exports = router;
