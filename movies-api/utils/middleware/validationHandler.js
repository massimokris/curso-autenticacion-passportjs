const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

//uso joi para validar los datos o parametros que recivo en los distintos endpoints
function validate(data, schema) {
  const { error } = joi.object(schema).validate(data);
  return error;
}

//chequeo un campo en especifico o por defecto el body
function validationHandler(schema, check = 'body') {
  return function(req, res, next) {
    const error = validate(req[check], schema);

    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;
