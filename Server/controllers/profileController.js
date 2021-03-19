const User = require('../models/userSchema');

exports.getUser = (req, res, next) => {
    console.log('aqui el usuario')
    res.json({user: req.user } );
};