const User = require('../models/userSchema');
const { validationResult } = require('express-validator');

// Parámetros de entrada:
// req.body.user: Usuario que hace la donación

exports.createDonation = async (req, res) => {
    // Mostrar mensajes de error de express validator
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(req.body)
        return res.status(400).json({errors: errors.array()});
    }
    let usuario = await User.findOne({ user: req.body.user });

    if (!usuario) {
        res.status(401).json({msg : 'El Usuario No Existe'});
    }
    if (usuario.luzonesTotal) {
        usuario.luzonesTotal = usuario.luzonesTotal + 100
    } else {
        usuario.luzonesTotal = 100
    }
    if (usuario.donationsTotal) {
        usuario.donationsTotal = usuario.donationsTotal + 1
    } else {
        usuario.donationsTotal = 1
    }
    console.log(usuario)

    await usuario.save()
    res.json({msg: 'donacion realizada'})
}

exports.infoDonation = async (req, res) => {
    // Mostrar mensajes de error de express validator
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(req.body)
        return res.status(400).json({errors: errors.array()});
    }
    let usuario = await User.findOne({ user: req.body.user });

    if (!usuario) {
        res.status(401).json({msg : 'El Usuario No Existe'});
    }
    res.json({donationsTotal: usuario.donationsTotal, luzonesTotal: usuario.luzonesTotal})
}