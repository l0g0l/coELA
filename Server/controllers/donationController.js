const User = require('../models/userSchema');


exports.onedonation = async(req, res) => {
    console.log('aqui tu donación puntual...');
    console.log('esta donación equivale a 100 luzones..');
    //Aqui va la funcion de agregar luzones al array del esquema: 100 en cada transaccion
    let usuario = await User.findById({user: req.body.user  });

    if(usuario) {
        return res.status(400).json({msg: 'Usiario encontrado'});
    }
    console.log(usuario.user)
    console.log('esta donación equivale a 100 luzones..');
    try {
        await User.save();
        res.json({msg : 'Has sumado 100 luzones'});
    } catch (error) {
        console.log(error);
    }
};

exports.percent = (req, res) => {
    console.log('aqui el portcentaje de tu nomina..');
    console.log('esta donación equivale a 100 luzones..');
    //Aqui va la funcion de agregar luzones al array del esquema: 100 en cada transaccion
};

exports.periodic = (req, res) => {
    console.log('aqui tu donación puntual...');
    console.log('esta donación equivale a 100 luzones..');
    //Aqui va la funcion de agregar luzones al array del esquema: 100 en cada transaccion
};

exports.roundup = (req, res) => {
    console.log('aqui el redondeo de tus compras..');
    console.log('esta donación equivale a 100 luzones..');
    //Aqui va la funcion de agregar luzones al array del esquema: 100 en cada transaccion
    
};


//Agrega 100luzones al array de luzones del User

// cont totalLuzones;
// const pay = 100
// const donation = User.donations.luzones;
// 
// [...donation]