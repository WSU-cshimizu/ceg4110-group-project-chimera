const express = require("express");
const router = express.Router();
const db = require("../models/db");

// Helper function to generate a 6-digit random ID
const generateUserId = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Function to check if user ID exists in the database
const checkUserIdExists = (userId) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT userid FROM users WHERE userid = ?", [userId], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results.length > 0); // Returns true if userId exists
    });
  });
};

// Create user
router.post("/users", async (req, res) => {
  try {
    const user = req.body;

    // Generate a unique user ID
    let userId = generateUserId();
    let isUserIdExists = await checkUserIdExists(userId);
    console.log(user)

    // Keep generating until we find a unique ID
    while (isUserIdExists) {
      userId = generateUserId();
      isUserIdExists = await checkUserIdExists(userId);
    }

    // Add the generated userId to the user object
    user.userid = userId;

    console.log(user)
    // Insert the user into the database
    db.query("INSERT INTO users SET ?", user, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send({ id: result.insertId, ...user, message: "Logged in sucessfully." });
      }
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const { useremail, password } = req.body;

    // Validate the input fields
    if (!useremail || !password) {
      return res.status(400).send({ message: "Email and password are required." });
    }

    // Query the user from the database
    const query = "SELECT userid, useremail, role FROM users WHERE useremail = ? AND password = ?";
    db.query(query, [useremail], (err, results) => {
      if (err) {
        return res.status(500).send({ error: err });
      }

      // Check if the user exists
      if (results.length === 0) {
        return res.status(404).send({ message: "User not found. Please sign up." });
      }

      const user = results[0];

      // Verify password (assuming plain text for now, but consider hashing in production)
      if (user.password !== password) {
        return res.status(401).send({ message: "Invalid email or password." });
      }

      // If successful, send user details (without sensitive information like password)
      const { userid, name } = user;
      res.status(200).send({
        message: "Logged in successfully.",
        user: {
          userid,
          email,
          role,
        },
      });
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// Read all users
router.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // res.send(results);
      res.send({
        hello: "hii",
      });
    }
  });
});

// Read single user
router.get("/users/:id", (req, res) => {
  db.query(
    "SELECT * FROM users WHERE userid = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(results[0]);
      }
    }
  );
});

// Update user
router.put("/users/:id", (req, res) => {
  const user = req.body;
  db.query(
    "UPDATE users SET ? WHERE userid = ?",
    [user, req.params.id],
    (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ id: req.params.id, ...user });
      }
    }
  );
});

// Delete user
router.delete("/users/:id", (req, res) => {
  db.query("DELETE FROM users WHERE userid = ?", [req.params.id], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: "User deleted successfully" });
    }
  });
});

module.exports = router;
