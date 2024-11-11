const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authentication_controller');

router.post('/auth/createUser', authenticationController.createNewUser);
router.get('/auth/login', authenticationController.loginUser);

module.exports = router;