const mongoose = require('mongoose');
const { periodic } = require('../controllers/donationController');
const Schema  = mongoose.Schema;
const userSchema = new Schema({
   
    name: {type: String,  trim: true },
    //user puede ser un objeto que contenga config cuando haya config activas reales
    user: {type: String,  trim: true },
    avatar: {type: String,  trim: true },
    dni: {type: String,  trim: true },
    email: {type: String,  trim: true },
    password: {type: String,  trim: true },
    created: { type: Date, default: Date.now },
    luzonesT: {type: Number, default: 100 ,trim: true },
    donations: {
        type: {
            onedonation: {
                type: Boolean
            },
            roundup:{
                type: Boolean
            },
            periodic: {
                type: Boolean
            },
            percetn: {
                type: Boolean
            }
        },
        luzones: {
            type: Number,
            trim: true
        },
        euros: {
            type: Number,
            trim: true
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
    }
})




module.exports = mongoose.model('users',userSchema)