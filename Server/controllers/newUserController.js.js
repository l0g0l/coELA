const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});
const { validationResult } = require('express-validator');

exports.newUser = async (req, res) => {
console.log(req.body)
    // Mostrar mensajes de error de express validator
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    
    // Verificar si el usuario ya estuvo registrado
    //const { user, password } = req.body;
    try {


    let usuario = await User.findOne({ user: req.body.user });

    if(usuario) {
        return res.status(400).json({ msg: 'El usuario ya esta registrado' });
    }

    // Crear un nuevo usuario
    user = new User(req.body);
    
    // Hashear el password
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt );

    
     await user.save();
    // crear y firmar jwt

    const payload= {
        id: user._id,
            name: user.name,
          

    }

    // firmar jwt
    jwt.sign(payload, process.env.SECRETA, {
        expiresIn: '8h'
    }, (error, token)=>{
        if(error)throw error;
        res.json({token: token});
    })

//hasta aqui token
      
    } catch (error) {
        console.log(error);
    }

}