const express = require('express');
const router = express.Router();
const db = require('../models/db');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Create report
router.post('/reports', (req, res) => {
  const report = req.body;
  db.query('INSERT INTO report SET ?', report, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({ id: result.insertId, ...report });
    }
  });
});

// Read all reports
router.get('/reports', (req, res) => {
  db.query('SELECT * FROM report', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

// Read single report
router.get('/reports/:id', (req, res) => {
  db.query('SELECT * FROM report WHERE reportid = ?', [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results[0]);
    }
  });
});

// Update report
router.put('/reports/:id', (req, res) => {
  const report = req.body;
  db.query('UPDATE report SET ? WHERE reportid = ?', [report, req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ id: req.params.id, ...report });
    }
  });
});

// Delete report
router.delete('/reports/:id', (req, res) => {
  db.query('DELETE FROM report WHERE reportid = ?', [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'Report deleted successfully' });
    }
  });
});

module.exports = router;
