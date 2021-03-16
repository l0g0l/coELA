const express = require('express');
const app = express();
const cors = require('cors'); // compartir recursos en distintos dominios y orígenes (front-back)
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config(); 
const morgan = require('morgan');
const routes = require('./routes/index');
const crypto = require('crypto')

let hash = crypto.createHash('md5').update('some_string').digest("hex")


conectarDB = require('./config/db')

//Habilitando body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


// Settings
const port = process.env.PORT || 4000


// Habilitar Cors
// const opcionesCors = {
//   origin: process.env.FRONTEND_URL
// }
// app.use(cors(opcionesCors) );
app.use(cors());

app.use(morgan('dev'))// para ver los estados http de las peticiones
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'Client/build')));




// routes
app.use('/api', routes());

//esto es necesario o me vale con la de arriba??
app.use('/api/users', require('./routes/index'));
app.use('/api/registro', require('./routes/index'));

// app.get('/api/home',urlencodedParser,  users.getHome);
// app.get('/api/onedonation', urlencodedParser, users.getUnaDonacion);
// app.get('/api/roundup', urlencodedParser, users.getRedondeo);
// app.get('/api/percent', urlencodedParser, users.getPorcentaje);
// app.get('/api/periodic', urlencodedParser, users.getPeriodica);
// app.post('api/logout',urlencodedParser, users.logoutUser)




// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/Client/build/index.html'));
});


app.listen(port);
console.log('App is listening on port ' + port);


