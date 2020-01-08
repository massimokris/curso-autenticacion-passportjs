const boom = require('@hapi/boom');
const { config } = require('../../config');

//enviar el stack o no es base a si esta el dev o en production
function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }
  return error;
}

//almacenar los logs de errores
function logErrors(err, req, res, next) {
  console.log(err);
  //enviar el error al siguiente middleware
  next(err);
}

//envolver los errores que vengas fuera del formato boom
function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  //enviar el error al siguiente middleware
  next(err);
}

//desabilito las validaciones de eslint para una linea especifica
function errorHandler(err, req, res, next) { // eslint-disable-line
  const {
    output: { statusCode, payload }
  } = err;

  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
};
