//constante para recordar sesion por tiempo
const THIRTY_DAYS_IN_SEC = 2592000;
const TWO_HOURS_IN_SEC = 7200;

//requerimos express para definir las rutas
const express = require('express');

//requerimos passport para la seguridad de nuestros endpoints
const passport = require('passport');

//requerimos boom para el manejo de errores
const boom = require('@hapi/boom');

//requerimos jwt con el cual vamos a crear nuestras firmas jwt
const jwt = require('jsonwebtoken');

//requerimos el servicio de apikeys
const ApiKeysService = require('../services/apiKeys');

//requerimos userservice para registro de usuarios
const UsersService = require('../services/users');

//requerimos el validationhandler para validar los datos al momento de crear un usuario
const validationhandler = require('../utils/middleware/validationHandler');

//requerimos el schema de creacion de usurio
const { createUserSchema } = require('../utils/schemas/users');

//requerimos el config que es donde tenemos el secret para firmar nuestros jwt
const { config } = require('../config');

//Basic strategy para definir la estrategia de seguridad
require('../utils/auth/strategies/basic');

function authApi(app) {
    //creamos nuestro router para los endpoints
    const router = express.Router();

    //le indicamos la ruta raiz de este servicio
    //y le indicamos que va a utilizar el router para las definiciones
    app.use('/api/auth', router);

    //instanciamos nuestro api service
    const apiKeysService = new ApiKeysService();

    //instanciamos nuestro user service
    const usersService = new UsersService();

    //endpoint para el sing-in de usuarios
    router.post('/sign-in', async (req, res, next) => {
        //extraemos el token del request
        const { apiKeyToken, rememberMe } = req.body;

        //validamos que el token exista en el request
        if(!apiKeyToken) {
            next(boom.unauthorized('apiKeyToken is required'));
        }
        passport.authenticate('basic', (error, user) => {
            try {
                //manejamos el error
                //o la falta se usuario
                if(error || !user) {
                    next(boom.unauthorized());
                }

                

                //si todo sale bien
                //realizamos el login con el usuario que obtenemos
                //y le indicamos que no recuerde sesion
                req.login(user, {session: false}, async (error) => {
                    //manejamos el error que pueda ocurrir
                    if(error) {
                        next(error);
                    }

                    //si todo sale bien 
                    //procedemos a buscar el apiKey con el token que recibimos 
                    //en el body del request
                    const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });

                    if(!apiKey) {
                        next(boom.unauthorized());
                    }

                    //si todo esto sale bien
                    //procedemos a crear nuestro jwt
                    const {_id: id, name, email } = user;

                    //construimos el payload de nuestro token
                    const payload = {
                        sub: id,
                        name,
                        email,
                        //definimos que los scopes de este usuario
                        //van a ser los que vienen definidos 
                        //desde el apiKey que esta en la base
                        scopes: apiKey.scopes
                    }

                    //creamos nuestro token
                    //con el payload
                    //y con el secret que ya tenemos definido
                    const token = jwt.sign(payload, config.authJwtSecret, {
                        //le indicamos la duracion de este token
                        //por temas de seguridad
                        //si el usuario quiere recordar session
                        //le definimos la duracion en 1 mes si no en 2 hs
                        expiresIn: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC
                    });

                    //en caso de exito respondemos con un 200
                    //con el token que creamos
                    //el usuario con sus datos
                    res.status(200).json({ token, user: {id, name, email}});
                });
            } catch (error) {
                //invocamos un error con la funcionalidad de codigo asincrono next()
                next(error);
            }
            //debido a que authenticate es un custom callback
            //debemos hacer un closure con la firma de la ruta
            //para asegurarnos que el authenticate y custom callback
            //funcionen sin problemas
        })(req, res, next);
    });

    //endpoint para el sign-up de usuarios
    //utilizamos el validationhandler para validar que lo que recibimos como usuario sea correcto
    router.post('/sign-up', validationhandler(createUserSchema), async (req, res, next) => {
        const { body: user } = req;

        try {
            const userExist = await usersService.getUser(user);

            if(userExist) {

                delete userExist.password;

                res.status(302).json({
                    data: userExist,
                    message: 'user already exists'
                });
            } else {
               const createdUserId = await usersService.createUser({ user });

                res.status(201).json({
                    data: createdUserId,
                    message: 'user created'
                });
            }
            
        } catch (error) {
            //invocamos un error con la funcionalidad de codigo asincrono next()
            next(error);
        }
    });
}

module.exports = authApi;