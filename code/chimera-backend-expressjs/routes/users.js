const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Create user
router.post('/users', (req, res) => {
  const user = req.body;
  db.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: result.insertId, ...user });
    }
  });
});

// Read all users
router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

// Read single user
router.get('/users/:id', (req, res) => {
  db.query('SELECT * FROM users WHERE userid = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results[0]);
    }
  });
});

// Update user
router.put('/users/:id', (req, res) => {
  const user = req.body;
  db.query('UPDATE users SET ? WHERE userid = ?', [user, req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ id: req.params.id, ...user });
    }
  });
});

// Delete user
router.delete('/users/:id', (req, res) => {
  db.query('DELETE FROM users WHERE userid = ?', [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'User deleted successfully' });
    }
  });
});

module.exports = router;
