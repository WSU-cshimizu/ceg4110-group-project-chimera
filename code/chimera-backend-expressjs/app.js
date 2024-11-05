const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const reportedEntitiesRoutes = require('./routes/entities');
const knownEntitiesRoutes = require('./routes/known_entities');
const locationsRoutes = require('./routes/locations');
const reportsRoutes = require('./routes/reports');
const usersRoutes = require('./routes/users');


app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', reportedEntitiesRoutes);
app.use('/api', knownEntitiesRoutes);
app.use('/api', locationsRoutes);
app.use('/api', reportsRoutes);
app.use('/api', usersRoutes);

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
