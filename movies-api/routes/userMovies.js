//importamos la libreria express para utilizarla como servidor
const express = require('express');

//importamos passport para darle seguridad a la rutas
const passport = require('passport');

//schemas de validación
//importamos el servicio de userMovies
//donde esta toda la logica de negocio de nuestra api de userMovies
const UserMoviesService = require('../services/userMovies');

//validador de schemas
//importamos el validationHandler que nos va a servir para validaciones de nuestros schemas
const validationHandler = require('../utils/middleware/validationHandler');

//validador de scopes de usuario
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

//importamos todos los schemas necesarios para las validaciones en nuestra api
const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

//importamos la estrategia de jwt
require('../utils/auth/strategies/jwt');

// aca vamos a definir todas las rutas de las peliculas de usuario
function userMoviesApi(app) {
  //instancio un router de express qeu voy a utilizar para crear las rutas
  const router = express.Router();

  //definimos la ruta fuente de la api
  //y le decimos el router que va a utilizar
  app.use('/api/user-movies', router);

  //inicializamos el servio de las movies
  //el cual contiene toda la logica de negocio para hacer los distintos metodo a la base
  const userMoviesService = new UserMoviesService();

  //cuando hagan un request a la ruta raiz vamos a listar las peliculas de usuario
  //validamos el id de ese usuario con el validationHandler
  //al cual le indicamos con que schema va a validar el id recibido
  //y le indicamos que ese userId lo va a verificar en el query del request
  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-movies']),
    validationHandler({ userId: userIdSchema }, 'query'),
    async function(req, res, next) {
      //sacamos el userId del query del request
      const { userId } = req.query;

      try {
        //hacemos un request a nuestro servicio para obtener todas la peliculas por un userId
        const userMovies = await userMoviesService.getUserMovies({ userId });

        //si todo sale bien respondemos
        res.status(200).json({
          data: userMovies,
          message: 'user movies listed'
        });
      } catch (error) {
        //invocamos un error con la funcionalidad de codigo asincrono next()
        next(error);
      }
    }
  );

  //request para insertar un userMovie en la base
  //le indicamos al validador de schemas el schema que va a utilizar para validar
  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:user-movies']),
    validationHandler(createUserMovieSchema),
    async (req, res, next) => {
      //extraemos el body de los datos enviados en el request
      const { body: userMovie } = req;
      try {
        //hacemos un request a nuestro servicio para crear un userMovie
        const createdUserMovieId = await userMoviesService.createUserMovie({
          userMovie
        });

        //si todo sale bien
        //enviamos un 201 con el id del usuario y un mensaje de exito
        res.status(201).json({
          data: createdUserMovieId,
          message: 'User movie created'
        });
      } catch (error) {
        //invocamos un error con la funcionalidad de codigo asincrono next()
        next(error);
      }
    }
  );

  //request para eliminar un userMovie en la base
  //validamos el id de ese userMovie con el validationHandler
  //al cual le indicamos con que schema va a validar el id recibido
  //y le indicamos que ese userMovieId lo va a verificar en los params del request
  router.delete(
    '/:userMovieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:user-movies']),
    validationHandler({ userMovieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      //sacamos el userMovieId del params del request
      const { userMovieId } = req.params;

      try {
        //hacemos un request a nuestro servicio para eliminar un userMovie
        const deleteduserMovieId = await userMoviesService.deleteUserMovie({
          userMovieId
        });

        //si todo sale bien
        //enviamos un 200 con el id del usuario y un mensaje de exito de la eliminación
        res.status(200).json({
          data: deleteduserMovieId,
          message: 'User movie deleted'
        });
      } catch (error) {
        //invocamos un error con la funcionalidad de codigo asincrono next()
        next(error);
      }
    }
  );
}

module.exports = userMoviesApi;
