const express = require('express');
const router = express.Router();
const db = require('../models/db');
const { body, param, validationResult } = require('express-validator');


// Validation rules for reported entities
const validateEntity = [
  body('kwn_entity_entityid').isInt().notEmpty().withMessage('Known entity ID is required'),
  body('location_locationid').isInt().notEmpty().withMessage('Location ID is required'),
  body('rptabilities').optional().isString(),
  body('rptappearance').optional().isString(),
  body('rptbehavior').optional().isString(),
  body('rptemf5').optional().isInt(),
  body('rptghostorbs').optional().isInt(),
  body('rptspiritbox').optional().isInt(),
  body('rptfreezingtemp').optional().isInt(),
  body('rptuv').optional().isInt(),
  body('rptghostwriting').optional().isInt(),
  body('rptdots').optional().isInt()
];

// Create reported entity with validation
router.post('/entities', validateEntity, (req, res) => { // , validate
    const entity = req.body;
    db.query('INSERT INTO rpt_entity SET ?', entity, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send({ id: result.insertId, ...entity });
        }
    });
});

// Update reported entity with validation
router.put('/entities/:id', param('id').isInt().withMessage('Invalid ID format'), validateEntity,  (req, res) => { // , validate
    const entity = req.body;
    db.query('UPDATE rpt_entity SET ? WHERE rptid = ?', [entity, req.params.id], (err) => {
    if (err) {
        res.status(500).send(err);
    } else {
        res.send({ id: req.params.id, ...entity });
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
