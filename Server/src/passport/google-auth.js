// Configuracion de Passport JS con Google.

import passport from "passport";
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const User = require("../models/user").default;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Estrategia para Registrarse

passport.use("sign-in-google",new GoogleStrategy(
    {
      clientID:"ssjsjsjjsj111j1j1j1iiwjwnwwjww",
      clientSecret: "jsjsjsjjsjss",
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findById(profile.id); // si el usuario no existe 
                                                    //lo creamos
      if (user) {
        done(null, false);
      } else {
        let newUser = new User();
            newUser._id = profile.id
            newUser.nombre = profile.displayName
            newUser.avatar = profile.photos[0].value
           await newUser.save() //guardamos en la base de datos
        done(null, profile); //guardamos en la base de datos
      }
    }
  )
);


// Estrategia para Iniciar Sesion


passport.use("sign-up-google",new GoogleStrategy(
  {
    clientID:"sjsjsjsjssswww",
    clientSecret: "sjsjsjsjsjsj",
    callbackURL: "http://localhost:4000/auth/google/signup",
  },
  async (accessToken, refreshToken, profile, done) => {
    const user = await User.findById(profile.id);// si existe en la base de datos
                                                 //  puede iniciar sesion
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
    
  }
)
);
