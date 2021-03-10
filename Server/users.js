const fetch = require("node-fetch");
const dotenv = require('dotenv');
dotenv.config();
const db = require('./models/mongodb');
ObjectID = require('mongodb').ObjectID;
const APIKEY = process.env.APIKEY;
const express = require ('express');
const Llave = process.env.LLAVE;



exports.getLogin= async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let resultado = null;
    let payload = {};
    let autenticar = await db.autenticar(username,password);
    autenticar.forEach(element=> {
        if(username==element.username){
            if(password==element.password){
                resultado = true;
                payload = {
                    username: element.username,
                    password: element.password,
                    id: element.ID
                };
                }
            }
            });
   
    if (resultado){
        if(payload.rol=='usuario'){
            res.status(200).redirect('/dashboard');
        }else {
            res.status(200).render('login', {value: 'Contraseña o Usuario Incorrecto'});
        }
        
    } 
}

