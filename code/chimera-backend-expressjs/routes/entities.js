const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Create reported entity
router.post('/entities', (req, res) => {
  const entity = req.body;
  db.query('INSERT INTO rpt_entity SET ?', entity, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: result.insertId, ...entity });
    }
  });
});

// Read all reported entities
router.get('/entities', (req, res) => {
  db.query('SELECT * FROM rpt_entity', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

// Read single reported entity
router.get('/entities/:id', (req, res) => {
  db.query('SELECT * FROM rpt_entity WHERE rptid = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results[0]);
    }
  });
});

// Update reported entity
router.put('/entities/:id', (req, res) => {
  const entity = req.body;
  db.query('UPDATE rpt_entity SET ? WHERE rptid = ?', [entity, req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ id: req.params.id, ...entity });
    }
  });
});

// Delete reported entity
router.delete('/entities/:id', (req, res) => {
  db.query('DELETE FROM rpt_entity WHERE rptid = ?', [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'Reported entity deleted successfully' });
    }
  });
});

module.exports = router;
