// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // or your database host
    user: 'your_username', // your database username
    password: 'your_password', // your database password
    database: 'your_database_name' // your database name
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = connection;
