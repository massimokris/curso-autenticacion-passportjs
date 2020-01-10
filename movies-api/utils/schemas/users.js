//Creo el schema que va a tener el usuario para tener validados sus atributos
const joi = require('@hapi/joi');

//defino el id del mismo tipo de los id's de mongo
const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}S/);

//schema de creacion de usuario
//defino que atributos son requeridos
//defino un booleano para saber si es admin
const userSchema = {
  name: joi
    .string()
    .max(100)
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  password: joi.string().required()
};

const createUserSchema = {
  ...userSchema,
  isAdmin: joi.boolean()
};

const createProviderUserSchema = {
  ...userSchema,
  apiKeyToken: joi.string().require()
}
//exporto los modulos de id de usuario y de crear un usuario
module.exports = {
  userIdSchema,
  createUserSchema,
  createProviderUserSchema
};
