// Required dependencies
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
const dbConfig = require('./config/db.config.js');

// Create MySQL connection
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

// Base route
app.get('/', (req, res) => {
  return res.json('From Backend Side');
});

// Import and use routes
const knownEntitiesRoutes = require('./routes/known_entities');
app.use('/api', knownEntitiesRoutes);


// Import and use routes
const reportsRoutes = require('./routes/reports.js');
app.use('/api', reportsRoutes);

// Import and use routes
const userRoutes = require('./routes/users.js');
app.use('/api', userRoutes);



// Server configuration
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export connection for use in other files
module.exports = connection;
