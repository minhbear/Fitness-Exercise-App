const express = require('express');
const router = express.Router();
const { userLogin, userRegister } = require('../controllers/userControllers')

//login 
router.post('/login', userLogin);

//sign up
router.post('/register', userRegister);

module.exports = router;