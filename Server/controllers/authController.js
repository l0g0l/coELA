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

    try {
        //revisar usuario regustrado
  
    const user_exist = await User.findOne({ user });
    // console.log(usuario);

    if(!user_exist) {
        res.status(401).json({msg : 'El Usuario No Existe'});
        return next();
    } 
    // Verificar el password y autenticar el usuario
    //const passwordok= await bcryptjs.compare(password, user.password);
    // console.log(password)
    // console.log(user_exist.password)
    if(password === user_exist.password ) {
        return res.status(400).json({msg: 'Password incorrecto'})
    }
        // Si todo va bien creamos  JWT
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
    console.log(eror);
        
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
