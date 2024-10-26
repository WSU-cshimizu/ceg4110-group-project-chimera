const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Create known entity
router.post('/known-entities', (req, res) => {
  const entity = req.body;
  db.query('INSERT INTO kwn_entity SET ?', entity, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: result.insertId, ...entity });
    }
  });
});

// Read all known entities
router.get('/known-entities', (req, res) => {
  db.query('SELECT * FROM kwn_entity', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

// Read single known entity
router.get('/known-entities/:id', (req, res) => {
  db.query('SELECT * FROM kwn_entity WHERE keid = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results[0]);
    }
  });
});

// Update known entity
router.put('/known-entities/:id', (req, res) => {
  const entity = req.body;
  db.query('UPDATE kwn_entity SET ? WHERE keid = ?', [entity, req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ id: req.params.id, ...entity });
    }
  });
});

// Delete known entity
router.delete('/known-entities/:id', (req, res) => {
  db.query('DELETE FROM kwn_entity WHERE keid = ?', [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'Entity deleted successfully' });
    }
  });
});

module.exports = router;
