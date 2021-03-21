const User = require('../models/userSchema');

// Creo que solo haría falta un enpoitn, una peticion de tipo post
// Porque haga la transaccion que haga sumara 100 luzones en el perfil del usuario
// Esto es: 
exports.onedonation = async(req, res) => {
    console.log('aqui tu donación puntual...');
    console.log('esta donación equivale a 100 luzones..');
    //Aqui va la funcion de agregar luzones al array del esquema: 100 en cada transaccion
    //Suma 100 luzonesT del esquema User
    //const luzones Update = User.luzonesT + 100
    // de esta forma modificaría el total, modificaría el numero de luzones que tiene
    //Pero NO estoy conservando el numero anterior No guardo el histórico
    const luzones = await User.findOne({luzones: req.body.luzonesT});
    try {
    luzones + 100
    console.log('esta donación equivale a 100 luzones..');
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