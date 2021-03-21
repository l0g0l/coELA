//antes Login controller, cambio nombre para no confundir
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.newUser = async (req, res) => {
    // Mostrar mensajes de error de express validator
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    // Verificar si el usuario ya estuvo registrado
 

    let usuario = await User.findOne({ user: req.body.user });

    if(usuario) {
        return res.status(400).json({ msg: 'El usuario ya esta registrado' });
    }

    // Crear un nuevo usuario
    user = new User(req.body);
    
    // Hashear el password
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt );

    try {
        await user.save();
        res.json({msg : 'Usuario Creado Correctamente'});
    } catch (error) {
        console.log(error);
    }
}