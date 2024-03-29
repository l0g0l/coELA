const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan')
const path = require('path');
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
const port = process.env.PORT || 4001;

console.log(process.env)

// Habilitar leer los valores de un body
app.use( express.json() );
//app.use('/', express.static('./public/build/'))
app.use(morgan('tiny'))
app.disable('etag'); // desactivar el caché

app.use('/api/user', require('./routes/user'));
app.use('/api/donation', require('./routes/donations'));
app.use('/api/plot', require('./routes/plot')); // llamada para pintar los gráficos
console.log(__dirname+'/../Client/build/index.html')
app.use(express.static(path.resolve(__dirname, '../Client/build')))
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../Client/build', 'index.html'))
});
/* curl -H 'Content-Type: application/json' -X POST http://localhost:4000/api/donation/info -d '{"user": "r0j4z0"}'
curl -H 'Content-Type: application/json' -X POST http://localhost:4000/api/donation/create -d '{"user": "r0j4z0"}'
curl -H 'Content-Type: application/json' -X POST http://localhost:4000/api/user/info -d '{"user": "r0j4z0"}'
curl -H 'Content-Type: application/json' -X POST http://localhost:4000/api/donation/info -d '{"user": "r0j4z0"}'  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTVlODI4M2Q3YmMwMzAxYzAwYjA2MyIsIm5hbWUiOiJGZXJuYW5kbyBHb256w6FsZXoiLCJlbWFpbCI6InIwajR6MEBnbWFpbC5jb20iLCJpYXQiOjE2MTYzNjE1MjksImV4cCI6MTYxNjM5MDMyOX0.LsR8vNDat3t5LqTt8TRd1pc5ze64uG-XPma1fueGc34'
 */

/*
'/api/user/signup'
'/api/user/signin'
'/api/user/info'
'/api/user/update'
'/api/donation/create'
'/api/donation/info' 
'/api/plot/average_donation'
'/api/plot/piechart'
*/

// Arrancar la app
app.listen(port, '0.0.0.0') // para que se cargue en cualquier IP libre

    console.log(`El servidor esta funcionando en el puerto ${port}`);
