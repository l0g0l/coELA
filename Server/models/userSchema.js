const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const userSchema = new Schema ({
    username: "",
    nombre:"",
    apellidos:"",
    pasword: "",
    email:""
})


// const userSchema = new Schema({
//     username: {
//         type: String,
//         require: true,
//         maxlength: [50,"Nombre muy largo"],
//         trim: true
//     },

//     nombre: {
//         type: String,
//         require: true,
//         maxlength: [20,"Username muy grande"],
//         unique: true,
//         trim: true
//     },
     
//     apellido: {
//         type: String,
//         require: true,
//         maxlength: [20,"Password muy grande"],
//         trim: true
//     },
  
   
//     //Pasword encriptada 
//     email: {
//         type: String,
//         require: true,
//         maxlength: [50,"Apellido muy largo"],
//         trim: true
//     },
//     luzones: {
//         type: String,
//         require: true,
//         maxlength: [50,"Apellido muy largo"],
//         trim: true
//     },
//     insignia: {
//         type: String,
//         require: true,
//         maxlength: [50,"Apellido muy largo"],
//         trim: true
//     }
   
  
// })



module.exports = mongoose.model('users',userSchema)