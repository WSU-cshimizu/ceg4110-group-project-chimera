const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",       // Database host
  // user: "root",            // Your MySQL username
  // password: "Aayush12345", // Your MySQL password
  user: "root",            // Your MySQL username
  password: "", // Your MySQL password
  database: "chimera_db"   // Database name
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
