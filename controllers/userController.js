//antes Login controller, cambio nombre para no confundir
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

exports.infoUser = async (req, res) => {
    // Mostrar mensajes de error de express validator
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(req.body)
        return res.status(400).json({errors: errors.array()});
    }
    // Verificar si el usuario ya estuvo registrado
    //const { email, password } = req.body;

    let usuario = await User.findOne({ user: req.body.user });

    res.json(usuario)
}