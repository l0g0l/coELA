const User = require('../models/userSchema');



exports.onedonation = async(req, res) => {
    console.log('aqui tu donación puntual...')

    let luzones = await User.findOne({ user: req.body.luzones });

    if (luzones){
        return luzones + 100;
    }

    console.log('esta donación equivale a 100 luzones..')
    try {
        await User.save(luzones);
        res.json({msg : 'Has sumado 100 luzones'});
    } catch (error) {
        console.log(error);
    }
}