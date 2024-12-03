const express = require('express');
const router = express.Router();
const db = require('../models/db');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { body, param, validationResult } = require('express-validator');
const { exec } = require('child_process');

//Validation rules for reports
const validateReport = [
  // body('rpt_entity_reportedentityid').isInt().notEmpty(),
  body('title').isString().notEmpty(),
  body('location_locationid').isInt().notEmpty(), //<-- Set up like this to not validate the location
  body('datetime').isISO8601().notEmpty(),
  body('reportedevidence').isString().optional(),
  body('reportedabilities').isString().optional(),
  body('reportedbehavior').isString().optional(),
  body('reportedappearance').isString().optional(),
  body('reportedphenomena').isString().optional(),
  body('user_userid').isInt().notEmpty()
];


router.post('/reports', (req, res) => {
  const {
    title,
    location_locationid,
    datetime,
    reportedevidence,
    user_userid,
    is_anonymous
  } = req.body;

  // Step 1: Run the Python script
  const path = require('path');

  // Resolve the absolute path to cat.py
  const scriptPath = path.resolve(__dirname, '../../comparative-analysis-tools/cat.py');
  
  // Construct the command
  const command = `python3 ${scriptPath} --evidence "${reportedevidence}"`;

  // const command = `python3 ../../comparative-analysis-tools/cat.py --evidence "${reportedevidence}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing Python script:', error);
      return res.status(500).send('Error generating entity ID.');
    }

    if (stderr) {
      console.error('Python stderr:', stderr);
      return res.status(500).send('Error in Python script execution.');
    }

    console.log('Python script raw output:', stdout);

    try {
      // Step 2: Parse the Python script output
      const parsedOutput = JSON.parse(stdout);

      // Validate the parsed output
      if (!parsedOutput || !parsedOutput.computedEntityId) {
        throw new Error('Invalid computedEntityId from Python script');
      }

      const computedEntityId = parsedOutput.computedEntityId;
      console.log('Parsed computedEntityId:', computedEntityId);

      // Step 3: Insert the report into the database
      const report = {
        title,
        rpt_entity_reportedentityid: computedEntityId, // Use computed ID
        location_locationid,
        datetime,
        reportedevidence,
        user_userid,
        is_anonymous,
      };

      db.query('INSERT INTO report SET ?', report, (err, result) => {
        if (err) {
          console.error('Database insert error:', err);
          return res.status(500).send('Error inserting report into database.');
        }

        // Respond with success
        res.status(201).send({ id: result.insertId, ...report });
      });
    } catch (parseError) {
      console.error('Error parsing Python script output:', parseError);
      return res.status(500).send('Failed to parse Python script output.');
    }
  });
});


// Read all reports with pagination
router.get('/reports', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  
  db.query('SELECT * FROM report LIMIT ? OFFSET ?', [limit, offset], (err, results) => {
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

// Search and filter reports
router.get('/reports/search', (req, res, next) => {
  const { keyword, date, location, entityType, sortBy } = req.query;
  
  let query = 'SELECT * FROM report WHERE 1=1';
  const params = [];

  if (keyword) {
    query += ' AND (reportedappearance LIKE ? OR reportedbehavior LIKE ?)';
    params.push(`%${keyword}%`, `%${keyword}%`);
  }

  if (date) {
    query += ' AND DATE(datetime) = ?';
    params.push(date);
  }

  if (location) {
    query += ' AND location_locationid = ?';
    params.push(location);
  }

  if (entityType) {
    query += ' AND rpt_entity_reportedentityid = ?';
    params.push(entityType);
  }

  if (sortBy === 'recent') {
    query += ' ORDER BY datetime DESC';
  } else if (sortBy === 'popular') {
    query += ' ORDER BY upvotes DESC';
  }

  db.query(query, params, (err, results) => {
    if (err) return next(err);
    res.json(results);
  });
});
// Search and filter reports
// router.get('/reports/search', (req, res, next) => {
//   const { keyword, date, location, entityType, sortBy } = req.query;

//   // Base query with JOIN to include entity name
//   let query = `
//     SELECT 
//       report.*, 
//       kwn_entity.ketype AS entity_name
//     FROM 
//       report
//     LEFT JOIN 
//       kwn_entity ON report.rpt_entity_reportedentityid = kwn_entity.keid
//     WHERE 1=1
//   `;
//   const params = [];

//   // Add filters dynamically
//   if (keyword) {
//     query += ' AND (reportedappearance LIKE ? OR reportedbehavior LIKE ?)';
//     params.push(`%${keyword}%`, `%${keyword}%`);
//   }

//   if (date) {
//     query += ' AND DATE(datetime) = ?';
//     params.push(date);
//   }

//   if (location) {
//     query += ' AND location_locationid = ?';
//     params.push(location);
//   }

//   if (entityType) {
//     query += ' AND rpt_entity_reportedentityid = ?';
//     params.push(entityType);
//   }

//   if (sortBy === 'recent') {
//     query += ' ORDER BY datetime DESC';
//   } else if (sortBy === 'popular') {
//     query += ' ORDER BY upvotes DESC';
//   }

//   db.query(query, params, (err, results) => {
//     if (err) return next(err);
//     res.json(results);
//   });
// });










// Upvote a report
// router.post('/reports/:id/upvote', (req, res, next) => {
//   db.query('UPDATE report SET upvotes = upvotes + 1 WHERE reportid = ?', 
//     [req.params.id], 
//     (err) => {
//       if (err) return next(err);
//       res.json({ message: 'Report upvoted successfully' });
//     });
// });


module.exports = router;
