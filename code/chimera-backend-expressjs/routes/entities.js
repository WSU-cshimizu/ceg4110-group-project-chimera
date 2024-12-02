<<<<<<< Updated upstream
=======
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



// ------------------ FOR MEGAN ------------------
// Compare reported entity with known entities to get parameters
// Ex.) http://localhost:3000/entities/compare/1                 <-- Gets entity ID #1 to use for comparison
router.get('/entities/compare/:id', (req, res) => {
  const reportedEntityId = req.params.id;
  
  // Query to get reported entity details
  db.query('SELECT * FROM rpt_entity WHERE rptid = ?', [reportedEntityId], (err, reportedEntity) => {
      if (err) {
          res.status(500).send(err);
          return;
      }
      
      // Query to get all known entities for comparison
      db.query('SELECT * FROM kwn_entity', (err, knownEntities) => {
          if (err) {
              res.status(500).send(err);
              return;
          }

          // Data used for matching
          res.send({
              reportedEntity: reportedEntity[0],
              knownEntities: knownEntities
          });
      });
  });
});

// Filters entity data
// Ex.) GET /entities/filter?evidence=1&behavior=aggressive&location=5 <-- Gets specific values (evidence: 1, behavior: agressive, location: 5)
router.get('/entities/filter', (req, res) => {
  const { evidence, behavior, location } = req.query;
  let query = 'SELECT * FROM rpt_entity WHERE 1=1';
  const params = [];

  if (evidence) {
      query += ' AND rptemf5 = ? OR rptghostorbs = ?';
      params.push(evidence, evidence);
  }
  if (behavior) {
      query += ' AND rptbehavior LIKE ?';
      params.push(`%${behavior}%`);
  }
  if (location) {
      query += ' AND location_locationid = ?';
      params.push(location);
  }

  db.query(query, params, (err, results) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send(results);
      }
  });
});

// Store entity match results
router.post('/entities/matches', (req, res) => {
  const matchData = {
      reported_entity_id: req.body.reportedEntityId,
      known_entity_id: req.body.knownEntityId,
      match_score: req.body.matchScore,
      match_criteria: req.body.criteria
  };
  
  db.query('INSERT INTO entity_matches SET ?', matchData, (err, result) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.status(201).send({ id: result.insertId, ...matchData });
      }
  });
});

// Get match history for a reported entity
router.get('/entities/matches/:id', (req, res) => {
  db.query('SELECT * FROM entity_matches WHERE reported_entity_id = ?', 
      [req.params.id], 
      (err, results) => {
          if (err) {
              res.status(500).send(err);
          } else {
              res.send(results);
          }
  });
});


router.get('/entities/name/:id', (req, res) => {
  const query = `
    SELECT ketype 
    FROM kwn_entity 
    WHERE keid = ?`; // Assuming `keid` is the primary key for `kwn_entity`

  db.query(query, [req.params.id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else if (results.length === 0) {
      res.status(404).send({ error: 'Entity not found.' });
    } else {
      res.status(200).json({ ketype: results[0].ketype });
    }
  });
});




module.exports = router;
>>>>>>> Stashed changes
