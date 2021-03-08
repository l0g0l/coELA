// Configuracion de Passport-JWT

const JWTstrategy = require('passport-jwt').Strategy;
const passport = require('passport')

const ExtractJWT = require('passport-jwt').ExtractJwt;

//Esto verifica que el token enviado por el usuario es válido
passport.use(new JWTstrategy({
  //secreto que solíamos firmar nuestro JWT
  secretOrKey : 'top_secret',
  //esperamos que el usuario envíe el token como un parámetro de consulta con el nombre 'secret_token'
  jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
}, (token, done) => {
  try {
    //Pass the user details to the next middleware
    return done(null, token);
  } catch (error) {
    done(error);
  }
}))