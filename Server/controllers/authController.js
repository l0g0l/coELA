const Usuario = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});
const { validationResult } = require('express-validator');

exports.autenticarUsuario = async (req, res, next) => {
    console.log('autenticarUsuario')
    // Revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    // Buscar el usuario para ver si esta registrado
    const { usuario, password } = req.body;
    const usuario_exist = await Usuario.findOne({ usuario });
    // console.log(usuario);

    if(!usuario_exist) {
        res.status(401).json({msg : 'El Usuario No Existe'});
        return next();
    } 

    // Verificar el password y autenticar el usuario
    console.log(password)
    console.log(usuario_exist.password)
    if(password === usuario_exist.password ) {
        // Crear JWT
        const token = jwt.sign({
            id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email
        }, process.env.SECRETA, {
            expiresIn: '8h'
        }  );

        res.json({ token })

    } else {
        res.status(401).json({msg: "Password Incorrecto"});
        return next();
    }

    
}

exports.usuarioAutenticado = (req, res, next) => {
    res.json({usuario: req.usuario } );
}