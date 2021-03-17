const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const routes = require('./routes');


// crear el servidor
const app = express();


// Conectar a la base de datos
conectarDB();

// Habilitar Cors
const opcionesCors = {
    origin: process.env.FRONTEND_URL
}
app.use( cors(opcionesCors) );

// Puerto de la app
const port = process.env.PORT || 4000;

// Habilitar leer los valores de un body
app.use( express.json() );


// routes
//app.use('/', routes());
// Rutas de la app
app.use('/api/', require('./routes/newUser'));
app.use('/api/login', require('./routes/auth'));
//app.use('/api/home', require('./routes/home')); me voy a traer nombre, luzones y configuraciones(?)
// app.use('/api/donations', require('./routes/donations'));


// Arrancar la app
app.listen(port)
    console.log(`El servidor esta funcionando en el puerto ${port}`);
