const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});
const { validationResult } = require('express-validator');

exports.authUser = async (req, res, next) => {
    //console.log('autenticarUsuario')
    // Revisar si hay errores
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    // Buscar el usuario para ver si esta registrado
    const { user, password } = req.body;
    const user_exist = await User.findOne({ user });
    // console.log(usuario);

    if(!user_exist) {
        res.status(401).json({msg : 'El Usuario No Existe'});
        return next();
    } 

    // Verificar el password y autenticar el usuario
    console.log(password)
    console.log(user_exist.password)
    if(password === user_exist.password ) {
        // Crear JWT
        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email
        }, process.env.SECRETA, {
            expiresIn: '8h'
        }  );

        res.json({ token })

    } else {
        res.status(401).json({msg: "Password Incorrecto"});
        return next();
    }
}

exports.getUser = async(req, res) => {
    console.log('Aqui el perfil del usuario')
   
    const user_profile = await User.findOne({ user });

    if (user_profile){
        res.json(user_profile)
    }
    console.log(user_profile)
    console.log({user: 'El Usuario que se ha logado'})
}
