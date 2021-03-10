const express = require('express');
const app = express();
const cors = require('cors'); // compartir recursos en distintos dominios y orígenes (front-back)
const path = require('path');
const dotenv = require('dotenv').config(); 

const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })


// Settings
const port = process.env.PORT || 5000

app.use(cors());
app.use(morgan('dev'))// para ver los estados http de las peticiones
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'Client/build')));


// routes


app.post('/api/', urlencodedParser, users.getLogin);
app.get('/api/dashboard',urlencodedParser,  users.getDashboard);
app.get('/api/onedonation', urlencodedParser, users.getUnaDonacion);
app.get('/api/roundup', urlencodedParser, users.getRedondeo);
app.get('/api/percent', urlencodedParser, users.getPorcentaje);
app.get('/api/periodic', urlencodedParser, users.getPeriodica);
app.post('api/logout',urlencodedParser, users.logoutUser)




// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/Client/build/index.html'));
});


app.listen(port);
console.log('App is listening on port ' + port);



