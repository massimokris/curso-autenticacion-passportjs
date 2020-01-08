//importo la libreria joi para validaciones y armados de schemas
const joi = require('@hapi/joi');

//importo el schema de id de movie que ya fue creado en el schema movies
const { movieIdSchema } = require('./movies');
//imporot el schema de id de usuario que ya fue creado en el schema users
const { userIdSchema } = require('./users');

//creo el schema del id de una movie del usuario con el mismo formato que los id's de mongo
const userMovieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}S/);

//user id schema solo va a contener la relacion entre usuario y movie
const createUserMoviesSchema = {
  userId: userIdSchema,
  movieId: movieIdSchema
};

//exporto los modulos de schemas que voy a utilizar para validacion en los endpoints
module.exports = {
  userMovieIdSchema,
  createUserMoviesSchema
};
