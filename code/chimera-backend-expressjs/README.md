# Chimera Backend

A paranormal entity tracking and analysis system built with Express.js and MySQL.


## Getting Started

1. Installing Dependencies:

-------- For Linux Users --------
```bash
sudo apt install nodejs npm
sudo apt install mysql-server
npm install express express-validator mysql cors
```

-------- For Windows Users --------
1.) Install MySQL for Windows from the official MySQL website
2.) Add MySQL to your system PATH during installation
3.) Open Command Prompt or PowerShell as administrator

2. Import the database schema:

-------- For Linux Users --------
```bash
mysql -u your_username -p your_database < Database/chimera_db_full.sql
```

-------- For Windows Users --------
```bash
mysql -u your_username -p your_database < Database\chimera_db_full.sql
```

## Actions
Interact with database table:
```bash
mysql -u chimera_user -p chimera_db
```
(Enter password: 1234)

Different SQL commands:
https://www.dataquest.io/blog/sql-commands/ 


Launch Express.js server:
```bash
node app.js
```
-------------------------------------------------------------------------------

1. If you add/delete/manipulate the datbase, run the following command (to the console) to update the database:

-------- For Linux Users --------
```bash
mysqldump -u chimera_user -p chimera_db > Database/chimera_db_full.sql
```

-------- For Windows Users --------
```bash
mysqldump -u chimera_user -p chimera_db > Database\chimera_db_full.sql
```

2. Add this file to the repository

3. Import the complete database:
```bash
mysql -u chimera_user -p chimera_db < chimera_db_full.sql
```

Now when someone pulls your code and runs the import, they'll get:
- The exact same table structures
- All your existing data
- Identical database state

This ensures everyone on the team works with the same dataset, making development and testing more consistent!

-------------------------------------------------------------------------------

# Database Connection
Connection details are configured in config/db.config.js:

- Host: "localhost",
- User: "chimera_user",
- Password: "1234",
- Database: "chimera_db"

# Available Data Operations

- Track paranormal entities
- Record evidence types (EMF, Ghost Orbs, Spirit Box, etc)
- Log location-specific activity
- Generate user reports
- Link reported entities to known entities

(For Megan)
Connecting to Database: https://dev.mysql.com/doc/connector-python/en/connector-python-example-connecting.html

Manipulating Database: https://www.w3schools.com/mysql/mysql_select.asp 

