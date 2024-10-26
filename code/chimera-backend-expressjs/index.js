const express = require('express');
const mysql = require('mysql2');
//const cors = require('cors');
const dbConfig = require('./config/db.config.js');
const db = require('./models/db');
const router = express.Router();
const app = express();

const knownEntitiesRoutes = require('./routes/known_entities');


app.use(express.json());
app.use('/api', knownEntitiesRoutes);


// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

// Connect to database
connection.connect((err) => {
  if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
  }
  console.log('Connected to database.');
});

module.exports = connection;

// Mounting the router
app.use('/', router);

// Routes
router.get('/about', (req, res) => {
  res.send('This is About Us page');
});

router.get('/explore', (req, res) => {
  res.send('This is the explore page');
  db.query('SELECT * FROM kwn_entity', (err, results) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving entities."
      });
    } else {
      res.send(results);
    }
  });
});

router.get('/contact', (req, res) => {
  res.send('This is the contact page');
});


// home route
router.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = connection;

