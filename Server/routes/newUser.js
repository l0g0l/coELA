const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const { check } = require('express-validator');

router.post('/', 
    [
        check('name', 'El Nombre es Obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser de al menos 6 caracteres').isLength({min: 6}),
    ],
    loginController.newUser
);

module.exports = router;