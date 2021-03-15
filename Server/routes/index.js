const express = require('express');
const router = express.Router();
const userController= require('../controllers/userController');
const { check } = require('express-validator')


module.exports = function(){ 



//Peticiones GET
// router.get('/home', userController.getUser);



//Peticiones POST

//Registro de usuario
// router.post('/', 
//     [
//         check('name', 'Debe escribir un nombre').not().isEmpty(),
//         check('username','Es obligatorio').not().isEmpty(),
//         check('email', 'La contraseña es obligatoria').isEmail(),
//         check('password', 'la contraseña tiene que tener al menos seis caracteres').isLength({min: 6})
//     ],
//     userController.newUser); 

router.post('/', 
    [
        check('name', 'Debe escribir un nombre').not().isEmpty(),
        check('username','Es obligatorio').not().isEmpty(),
        check('email', 'La contraseña es obligatoria').isEmail(),
        check('password', 'la contraseña tiene que tener al menos seis caracteres').isLength({min: 6})
    ],
    userController.newUser); 
//LogIn de Usuario
router.post('/', userController.userLogin); 

//Estas rutas modifican o agregan campos de bbdd

//Peticiones Put
router.put('/donation/now', userController.oneDonation); //Donar ahora
router.put('/donation/percent', userController.percentDonation);//Porcentaje
router.put('/donation/roudup', userController.roundUp);//Redondeo


router.put('/user/:username', userController.editUser) //Añade y/o modifica datos

//Peticiones Delete
router.delete('/user/:id', userController.deleteUser) //Borra usuario de BBDD



    return router;
}

