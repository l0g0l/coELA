//  Finalmente nuestro src/server.js


import express, {json, urlencoded} from "express"
import morgan from "morgan";
import passport from "passport";
import cors from "cors";
const app = express()

import('./src/passport/google-auth')
import('./src/passport/verify-token')

//middlewares
app.use(passport.initialize());
app.use(morgan('dev'))// para ver los estados http de las peticiones
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

//importando rutas
import routes from "./src/routes/routes";
app.use('/', routes);
import rutasProtegidas from "./src/routes/rutasProtegidas";
app.use('/api', passport.authenticate('jwt', { session : false }), rutasProtegidas );

//Creando servidor
import  {conectarDatabase} from "./database"; //importando funcion para conectar ala base de datos
let puerto = process.env.PORT || 4000
app.listen(puerto, () => {
    console.log(`server on port ${puerto}`)
    conectarDatabase()
});