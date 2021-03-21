const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const userSchema = new Schema({
   
    name: {
        type: String,
        trim: true
    }, 
    user: {
        type: String,
        trim: true,
        Date: Date.now(),
        unique: true

    },
    dni: {
        type: String,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true
    },    
    luzonesTotal: {
        type: Number,
        trim: true
    },
    luzonesLast: {
        type: Number,
        trim: true
    },
    donationsTotal: {
        type: Number,
        trim: true
    },
    donationsLast: {
        type: Date
        //Date: Date.Now,
    },
    payby: {
        card: {
        type: Boolean,
        trim: true
        },
        paypal: {
        type:  Boolean,
        trim: true
        },
        ccc: {
        type:  Boolean,
        trim: true
        },
        cripto: {
        type:  Boolean,
        trim: true
        }
    },
   

   
  
})



module.exports = mongoose.model('users',userSchema)