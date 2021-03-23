const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env'});

module.exports = (req, res, next ) => {
    console.log(req.headers)
    const authHeader = req.header('authorization');
    console.log(authHeader)

    if(authHeader) {
        // Obtener el Token 
        const token = authHeader.split(' ')[1];

        console.log(token)

        if(token) {
            // comprobar el JWT
            try {
                const user = jwt.verify(token, process.env.SECRETA );
                console.log(user)
                if (user) {
                    return next()
                }
                
            } catch (error) {
                console.log(error);
                console.log('JWT no valido');
                res.json({msg: "JWT Token error"})
            }
        }


    }
    res.json({msg: "Missing JWT Token"})
    res.end();
    //return next();
}