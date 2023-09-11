const express = require('express');

const authControlleer = require('../controllers/auth.controller');

const router = express.Router();

router.get('/signup', authControlleer.getSignup);

router.post('/signup', authControlleer.signup);

router.get('/login', authControlleer.getLogin);


module.exports = router;