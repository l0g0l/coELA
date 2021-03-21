const User = require('../models/userSchema');



exports.onedonation = async(req, res) => {
    console.log('aqui tu donación puntual...')
    

    let usuario = await User.findById({user: req.body.user  });

    if(usuario) {
        return res.status(400).json({msg: 'Usiario encontrado'});
    }

    console.log(usuario.user)
    // if (luzones){
    //     return luzones + 100;
    // }

    console.log('esta donación equivale a 100 luzones..')
    try {
        await User.save();
        res.json({msg : 'Has sumado 100 luzones'});
    } catch (error) {
        console.log(error);
    }
}