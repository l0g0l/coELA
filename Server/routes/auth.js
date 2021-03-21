const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');


router.post('/', 
    [
        check('user', 'Usuario incorrecto').not().isEmpty(),
        check('password', 'Password incorrecto').not().isEmpty()
    ],
    authController.authUser
);


router.get('/',
    auth,
    authController.getUser
);


module.exports = router;