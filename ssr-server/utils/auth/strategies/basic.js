//requiero passport para la seguridad
const passport = require('passport');

//requiero la estrategia basic de passport-http
const { BasicStrategy } = require('passport-http');

//requiero boom para el manejo de errores
const boom = require('@hapi/boom');

//requiero axios para las llamadas a otras api's
const axios = require('axios');

//requiero la configuracion para tomar la variables de entorno necesarias
const { config } = require('../../../config/index');

//definimos la nueva estrategia con passport.use
passport.use(
    new BasicStrategy(async (email, password, cb) => {
        try {
            //obtengo la data y el status del request de axios
            const { data, status } = await axios({
                url: `${config.apiUrl}/api/auth/sign-in`,
                method: 'post',
                auth: {
                    password,
                    username: email
                }, data: {
                    apiKeyToken: config.apiKeyToken
                }
            });

            if(!data || status !== 200) {
                return cb(boom.unauthorized(), false);
            }

            //en caso de que este todo bien 
            //retornamos un error null y los datos del usuario
            return cb(null, data);
        } catch (error) {
            cb(error);
        }
    })
)

