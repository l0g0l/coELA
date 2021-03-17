const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');


router.post('/', 
    [
        check('usuario', 'Agrega un email válido').not().isEmpty(),
        check('password', 'El password no puede ir vacio').not().isEmpty()
    ],
    authController.authUser
);


router.get('/',
    auth,
    authController.authUser
);


module.exports = router;