const express = require('express');
const { loginController, logoutController, signupContorller } = require('../controller/userController');
const { createToken } = require('../utils/jwtMiddleware');
const router = express.Router();

router.post('/login' ,loginController);
router.get('/logout', logoutController);
router.post('/signup', signupContorller);

module.exports = router;