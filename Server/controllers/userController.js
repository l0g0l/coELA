const User = require('../models/userSchema');

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
//Usuarios por ID
exports.userLoged = async (req, res, next)=>{

    try {
        const user = await User.findById(req.params.id);
        res.json(user)
    } catch (error) {
        console.log('no esta logado');
        next();
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
