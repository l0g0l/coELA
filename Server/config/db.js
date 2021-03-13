
const mongoose =require('mongoose')
require('dotenv').config({path: '.env'})
//conecta a mongo compas

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/luzonApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const conectarDB = mongoose.connection;
conectarDB.on('error', console.error.bind(console, 'connection error:')); 
conectarDB.once('open', () => {
  console.log('Conexion a BBDD correcta');

});

// Solo se conecta en local a la BBDD, hay que darle una vuelta con Atlas