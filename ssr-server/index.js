const express = require("express");

//middleware que nos ayuda a la seguridad de nuestra aplicación
//con 13 codigo http que la hacen mas segura
const helmet = require('helmet');
const cors = require('cors');

//requiero passport para la seguridad
const passport = require("passport");

//requiero session para manejar las session de inicio con twitter
const session = require("express-session");

//requiero boom para el manejo de errores
const boom = require("@hapi/boom");

//requiero cookieParser para
const cookieParser = require("cookie-parser");

//requiero axios para las llamadas a otras api's
const axios = require("axios");

const { config } = require("./config");

const app = express();

// body parser
app.use(express.json());

//helmet para seguridad
app.use(helmet());
app.use(cors());

//middleware de cookieParser
app.use(cookieParser());

//implementando la session para twitter
app.use(session({ secret: config.sessionSecret }));

//utilizamos initialize y session para twitter
app.use(passport.initialize());
app.use(passport.session());

//requerimos la estrategia que vamos a utilizar
require("./utils/auth/strategies/basic");

//OAUTH strategy
require("./utils/auth/strategies/oauth");

//google strategy
require("./utils/auth/strategies/google");

//twitter strategy
require("./utils/auth/strategies/twitter");

/**
 * Utilizaremos este servicio como una especie de
 * proxy con el cual consumiremos el servicio de movies-api
 */

//cuando hacemos el sign-in el token que no retorna lo inyectaremos en una cookie
//y a partir de eso las otras rutas van a leer el token de esa cookie
app.post("/auth/sign-in", async function(req, res, next) {
  passport.authenticate("basic", (error, data) => {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      }

      //si todo sale bien
      //hacemos el login
      req.login(data, { session: false }, async error => {
        if (error) next(error);

        const { token, ...user } = data;

        res.cookie("token", token, {
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
      method: "post",
      data: user
    });

    res.status(201).json({ message: "User created" });
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
      method: "post",
      data: userMovie
    });

    if (status !== 201) {
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
      method: "delete"
    });

    if (status !== 200) {
      return next(boom.badImplementation());
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

//ruta de autenticación con google
app.get(
  "/auth/google-oauth",
  passport.authenticate("google-oauth", {
    scope: ["email", "profile", "openid"]
  })
);

app.get(
  "/auth/google-oauth/callback",
  passport.authenticate("google-oauth", { session: false }),
  function(req, res, next) {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie("token", token, {
      httpOnly: !config.dev,
      secure: !config.dev
    });

    res.status(200).json(user);
  }
);

//autanticación con google de manera mas simple con la google strategy
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile", "openid"]
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  function(req, res, next) {
    if (!req.user) {
      next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie("token", token, {
      httpOnly: !config.dev,
      secure: !config.dev
    });

    res.status(200).json(user);
  }
);

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get("/auth/twitter/callback", passport.authenticate("twitter", {session: false}), function(req, res, next) {
    if(!req.user){
        next(boom.unauthorized());
    }

    const { token, ...user } = req.user;

    res.cookie('token', token, {
        httpOnly: !config.dev,
        secure: !config.dev
    });

    res.status(200).json(user);
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
