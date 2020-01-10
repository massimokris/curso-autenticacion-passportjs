const express = require("express");

//requiero passport para la seguridad
const passport = require('passport');

//requiero boom para el manejo de errores
const boom = require('@hapi/boom');

//requiero cookieParser para
const cookieParser = require('cookie-parser');

//requiero axios para las llamadas a otras api's
const axios = require('axios');


const { config } = require("./config");

const app = express();

// body parser
app.use(express.json());

//middleware de cookieParser
app.use(cookieParser());

//requerimos la estrategia que vamos a utilizar
require('./utils/auth/strategies/basic');

/**
 * Utilizaremos este servicio como una especie de 
 * proxy con el cual consumiremos el servicio de movies-api
 */

//cuando hacemos el sign-in el token que no retorna lo inyectaremos en una cookie
//y a partir de eso las otras rutas van a leer el token de esa cookie
app.post("/auth/sign-in", async function(req, res, next) {
    
    passport.authenticate('basic', (error, data) => {
        try {
            if(error || !data) {
                next(boom.unauthorized());
            }

            //si todo sale bien
            //hacemos el login
            req.login(data, { session: false }, async (error) => {
                if(error) next(error);
                
                const { token, ...user } = data;

                res.cookie('token', token, {
                    httpOnly: !config.dev,
                    secure: !config.dev
                });

                res.status(200).json(user);
            });
        } catch (error) {
            next(error);
        }
    })(req, res, next);
});

app.post("/auth/sign-up", async function(req, res, next) {
    const { body: user } = req;

    try {
        await axios({
            url: `${config.apiUrl}/api/auth/sign-up`,
            method: 'post',
            data: user

        });

        res.status(201).json({message: 'User created'});
    } catch (error) {
        next(error);
    }
});

app.get("/movies", async function(req, res, next) {});

//endpoint de peliculas de usuario (como "mi lista" de netflix)
app.post("/user-movies", async function(req, res, next) {
    try {
        const { body: userMovie } = req;
        const { token } = req.cookies;

        const { data, status } = await axios({
            url: `${config.apiUrl}/api/user-movies`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'post',
            data: userMovie
        });

        if(status !== 201) {
            return next(boom.badImplementation());
        } 

        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
});

app.delete("/user-movies/:userMovieId", async function(req, res, next) {
    try {
        const { userMovieId } = req.params;
        const { token } = req.cookies;

        const { data, status } = await axios({
            url: `${config.apiUrl}/api/user-movies/${userMovieId}`,
            headers: { Authorization: `Bearer ${token}` },
            method: 'delete'
        });

        if(status !== 200) {
            return next(boom.badImplementation());
        } 

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
