const express = require('express');
const router = express.Router();
const {register} = require('../constrollers/authController');
const {login} = require('../constrollers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);

// just try 
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({
        'message': 'You are authenticated',
        userId: req.user,
    })
})

module.exports = router;