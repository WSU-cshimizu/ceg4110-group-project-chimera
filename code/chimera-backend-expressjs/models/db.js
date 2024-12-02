const mysql = require('mysql2');

const connection = mysql.createConnection({
<<<<<<< Updated upstream
  host: "localhost",
  user: "root",
  password: "",
  database: "chimera_db"
=======
  host: "localhost",       // Database host
  // user: "root",            // Your MySQL username
  // password: "Aayush12345", // Your MySQL password
  user: "root",            // Your MySQL username
  password: "", // Your MySQL password
  database: "chimera_db"   // Database name
>>>>>>> Stashed changes
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
