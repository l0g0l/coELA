const express = require('express');
const router = express.Router();
const userController= require('../controllers/userController');


module.exports = function(){ 

     router.get('/', ()=>{
        console.log('Holaaaaaaaaa')
    })

//Registra Usuario

    router.post('/registro', userController.newUser)

//Obtiene usuario de BBDD
   
    router.post('/user', userController.userLoged)

//Modifica User

    router.put('/user/:id', userController.editUser)

//Borra User

    router.delete('/user/:id', userController.deleteUser)



    return router;
}

