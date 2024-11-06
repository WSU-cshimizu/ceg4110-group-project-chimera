const express = require('express');
const router = express.Router();
const db = require('../models/db');
const { body, param, validationResult } = require('express-validator');

// Validation rules for locations
const validateLocation = [
  body('building_name').isString().notEmpty(),
  body('room_number').isInt().optional(),
  body('roomdetails').isString().optional()
];

// Create location
router.post('/locations', validateLocation, (req, res) => {
  const location = req.body;
  db.query('INSERT INTO location SET ?', location, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: result.insertId, ...location });
    }
  });
});

// Read all locations
router.get('/locations', (req, res) => {
  db.query('SELECT * FROM location', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

// Read single location
router.get('/locations/:id', (req, res) => {
  db.query('SELECT * FROM location WHERE locationid = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results[0]);
    }
  });
});

// Update location
router.put('/locations/:id', validateLocation, (req, res) => {
  const location = req.body;
  db.query('UPDATE location SET ? WHERE locationid = ?', [location, req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ id: req.params.id, ...location });
    }
  });
});

// Delete location
router.delete('/locations/:id', (req, res) => {
  db.query('DELETE FROM location WHERE locationid = ?', [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'Location deleted successfully' });
    }
  });
});

module.exports = router;
