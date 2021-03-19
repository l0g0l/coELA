const express = require('express');
const router = express.Router();
const loginController = require('../controllers/newUserController');
const { check } = require('express-validator');

router.post('/', 
    [
        check('user', 'El Nombre es Obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de al menos 6 caracteres').isLength({min: 6}),
    ],
    loginController.newUser
);

module.exports = router;