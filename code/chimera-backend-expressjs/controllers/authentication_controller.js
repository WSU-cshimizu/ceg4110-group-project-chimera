const express = require('express');
const db = require('../models/db');
const bcrypt = require('bcrypt');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require('path');
const { access } = require('fs');
=======
>>>>>>> 48ca529 (add authentication controllers and routes)

const createNewUser = async (req, res) => {
    const { email, pwd } = req.body;

    //Verify Input
    if (!email) {
        return res.status(400).send("User email is required");
    }
    if (!pwd) {
        return res.status(400).send("User password is required");
    }

    try {
        //Check that user does not already exist
        db.query('SELECT * FROM users WHERE useremail = ?', [email], (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (results.length > 0) {
                return res.status(409).send("This email is already in use");
            }
        });
  
        //Create new ID for user based on last created ID
        const newUserId = 0;
        db.query('SELECT MAX(userid) AS highestId FROM users', (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            newUserId = results[0].highestId ? results[0].highestId + 1 : 1;
        });
        
        //Create hashed and salted password from provided password
        hashedPwd = bcrypt.hash(pwd, 10);
        
        //Insert new user into database
        db.query('INSERT INTO users (userid, useremail, password) VALUES (?, ?, ?)', [newUserId, email, hashedPwd], (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(201).send("User created successfully");
        });

    } catch (err) {
        res.status(500).send(err);
    }
};

const loginUser = async (req, res) => {
    const {email, pwd} = req.body;
    
    if(!email){
<<<<<<< HEAD
        return res.status(400).send("User Email is Required");
    }
    if(!pwd){
        return res.status(400).send("User Password is Required");
=======
        return res.status(400).send("User Email is Required")
    }
    if(!pwd){
        return res.status(400).send("User Password is Required")
>>>>>>> 48ca529 (add authentication controllers and routes)
    }

    try{
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if(err){
                return res.status(500).send("Error fetching user data");
            }
            if(results.length === 0){
                return res.status(401).send("Invalid email or password");
            }
            const user = results[0];
            if(!(await bcrypt.compare(pwd, user.password))){
                return res.status(401).send("Invalid email or password");
            }
            else{
<<<<<<< HEAD
                const accessToken = jwt.sign(
                    {"username" : email},
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn : '10m'}
                );
                const refreshToken = jwt.sign(
                    {"username" : email},
                    process.env.REFRESH_TOKEN_SECRET,
                    {expiresIn : '4h'}
                );
                res.cookie('jwt', refreshToken, {httpOnly : true, maxAge : 14400000});
                res.status(200).send(accessToken);
=======
                res.status(200).send("User log-in successful")
>>>>>>> 48ca529 (add authentication controllers and routes)
            }
        });
    }catch (err){
       res.status(500).send(err);
    }
}

module.exports = {createNewUser, loginUser};