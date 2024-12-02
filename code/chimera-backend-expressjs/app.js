const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const EntitiesRoutes = require('./routes/entities');
const knownEntitiesRoutes = require('./routes/known_entities');
const locationsRoutes = require('./routes/locations');
const reportsRoutes = require('./routes/reports');
const usersRoutes = require('./routes/users');


app.use(express.json());

<<<<<<< Updated upstream
app.use('/api', authRoutes);
app.use('/api', EntitiesRoutes);
=======
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
// const authorizationRoutes = require('./routes/auth.js');
const reportedEntitiesRoutes = require('./routes/entities.js');
const knownEntitiesRoutes = require('./routes/known_entities.js');
const locationsRoutes = require('./routes/locations.js');
const reportsRoutes = require('./routes/reports.js');
const usersRoutes = require('./routes/users.js');

// app.use('/api', authorizationRoutes);
//app.use(verifyJWT);
app.use('/api', reportedEntitiesRoutes);
>>>>>>> Stashed changes
app.use('/api', knownEntitiesRoutes);
app.use('/api', locationsRoutes);
app.use('/api', reportsRoutes);
app.use('/api', usersRoutes);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
