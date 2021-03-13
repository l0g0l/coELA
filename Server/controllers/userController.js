const User = require('../models/userSchema');
const crypto = require('crypto')

//Crea nuevo usuario
exports.newUser = async (req, res, next)=>{
   
   const user = new User(req.body)
    try {
        await user.save();
        res.json({mensaje: 'usuario creado correctamente'})
    } catch (error) {
        console.log('faltan datos')
        next();
    }
    
}
//Comprueba usuario y contraseña
exports.userLoged = async (req, res, next)=>{
    console.log(req.body)

    let result = {}
    try {
        const user = await User.findOne({username:req.body.username}).then((data)=>{
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

//Modificar datos de usuario

exports.editUser = async (req, res, next)=>{
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

//Borra usuario

exports.deleteUser = async(req, res, next)=>{
    try {
        const user = await User.findByIdAndDelete({_id : req.params.id});
        res.jason({mensaje : 'usuario eliminado'})
    } catch (error) {
        
    }
}



//Todos los usuarios
// exports.allUsers = async (req, res, next)=>{

//     try {
        
//     } catch (error) {
        
//     }
// }
