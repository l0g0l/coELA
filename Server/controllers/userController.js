const User = require('../models/userSchema');
const crypto = require('crypto')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


// Ir a la Home
exports.getUser = async (req, res, next)=>{
    try {
        
    } catch (error) {
        
    }
}
//Crea nuevo usuario (regitro de usuario /registro)
exports.newUser = async (req, res, next)=>{
    //Revisamos si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }
    //Extrae por dstrctrng email y psswrd
   const {email, password} = req.body;
    try {
        //revisa q el usuario creado sea unico
        const user = await User.findOne({email}) ;
        if (user) {
            res.json({ mensaje: 'El usuario ya existe'})
        }
        // crea nuevo usuario
        user = new User(req.body)
        // Hashear password
        const salt = await bcryptjs.salt(10);
        //Password Hasheado antes de guardar
        user.password = await bcryptjs.hash(password, salt);
        //guarda usuario
        await user.save();

        //Crear y firmar el jwt
        const payload = {
            user: {
                id: user.id 
            }
        }
        // Firma jwt
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
            //res.json({mensaje: 'Ole'})
        },(error, token)=>{
            if(error) throw (error);
            console.log('guay')
            res.json({ token })

        })   
        
    } catch (error) {
        res.json({mensaje: 'TE ESTÁS TROLEANDO'})
        next();
    }
    
}
//Comprueba usuario y contraseña
exports.userLogin = async (req, res, next)=>{
    console.log(req.body)
    let result = {}
    try {
        const user = await User.findOne({username:req.body.username}).then((data)=>{ //saco todos los datos
            // let hash = crypto.createHash('md5').update(req.body.password).digest("hex")   
        console.log(req.body.password)
        console.log(data.password)
    
        if(data.password == req.body.password){
            res.json({mensaje: 'login OK'})
            res.end();
        }else {
            res.json({mensaje: 'login KO'})
            res.end();
        }});
    } catch (error) {
        console.log(error)
        res.json({mensaje: 'usuario inexistente'});
        res.end();
    
    }
}

//Update user
//Función que modifique los datos introducidos, Puedo reutilizarla para las diferentes modificaciones que se realizan al hacer donaciones
exports.editUser = async (req, res, next)=>{
    //
    try {
        const user = await User.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        })
        res.json(user);
    } catch (error) {
        console.log('arrrggg')
        next()
        
    }
        
    }

// Siempre vpy a pedir los datos del usuario (findOne) y aplico cambios (AndUpdate) añadiento datos al esquema de mongoose

exports.oneDonation = async (req, res, next)=>{
    //
    try {
        const user = await User.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        })
        res.json(user);
    } catch (error) {
        console.log('arrrggg')
        next()
        
    }
}


exports.percentDonation = async (req, res, next)=>{
    //
    try {
        const user = await User.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        })
        res.json(user);
    } catch (error) {
        console.log('arrrggg')
        next()
        
    }
}


exports.roundUp = async (req, res, next)=>{
    //
    try {
        const user = await User.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        })
        res.json(user);
    } catch (error) {
        console.log('arrrggg')
        next()
        
    }
}




//Delete usuario usuario
exports.deleteUser = async(req, res, next)=>{
    try {
        const user = await User.findByIdAndDelete({_id : req.params.id});
        res.jason({mensaje : 'usuario eliminado correctamente'})
    } catch (error) {
        
    }
}


