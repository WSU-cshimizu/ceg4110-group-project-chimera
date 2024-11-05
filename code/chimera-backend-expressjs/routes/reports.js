const express = require('express');
const router = express.Router();
const db = require('../models/db');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const validateReport = [
  body('rpt_entity_reportedentityid').isInt().notEmpty(),
  body('location_locationid').isInt().notEmpty(),
  body('datetime').isISO8601().notEmpty(),
  body('weather').isString().optional(),
  body('reportedevidence').isString().optional(),
  body('reportedabilities').isString().optional(),
  body('reportedbehavior').isString().optional(),
  body('reportedappearance').isString().optional(),
  body('reportedphenomena').isString().optional(),
  body('user_userid').isInt().notEmpty()
];

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
