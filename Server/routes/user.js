const express = require('express');
const router = express.Router();
const signupController = require('../controllers/newUserController');
const loginController = require('../controllers/authController');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

router.post('/signup', 
    [
        check('user', 'El Nombre es Obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de al menos 6 caracteres').isLength({min: 6}),
    ],
    signupController.newUser
);

router.post('/signin', 
    [
        check('user', 'El Nombre es Obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de al menos 6 caracteres').isLength({min: 6}),
    ],
    loginController.authUser
);

router.post('/info', 
    [
        check('user', 'El Nombre es Obligatorio').not().isEmpty()
    ],auth,
    userController.infoUser
);


module.exports = router;