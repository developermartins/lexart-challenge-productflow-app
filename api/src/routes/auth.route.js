const router = require('express').Router();

router.post('/register', Auth.registerUser);

router.post('/login', Auth.loginUser);

module.exports = router;
