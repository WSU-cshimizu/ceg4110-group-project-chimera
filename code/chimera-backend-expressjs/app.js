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
//const authRoutes = require('./routes/auth.js'); Created authentication route, when it's finished remove "//"s
const authorizationRoutes = require('./routes/auth.js');
const reportedEntitiesRoutes = require('./routes/entities.js');
const knownEntitiesRoutes = require('./routes/known_entities.js');
const locationsRoutes = require('./routes/locations.js');
const reportsRoutes = require('./routes/reports.js');
const usersRoutes = require('./routes/users.js');

//app.use('/api', authRoutes); // Not created yet
app.use('/api', authorizationRoutes);
app.use('/api', reportedEntitiesRoutes);
app.use('/api', knownEntitiesRoutes);
app.use('/api', locationsRoutes);
app.use('/api', reportsRoutes);
app.use('/api', usersRoutes);

// Server configuration
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export connection for use in other files
module.exports = connection;
