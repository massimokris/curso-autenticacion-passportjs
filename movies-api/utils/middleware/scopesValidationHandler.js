//requerimos la libreria boom para el manejo de errores
const boom = require('@hapi/boom');

//esta funcion va a recibir los scopes permitidos para el usuario
//y va retornar un middleware
//por que necesita intervenir lo request de nuestras rutas
function scopesValidationHandler(allowedScopes) {
  return (req, res, next) => {
    //validamos que el usuario exista y si existe
    //que traiga los scopes permitidos para el
    if (!req.user || (req.user && !req.user.scopes)) {
      //en caso de error retornamos un unauthorized con el mensaje de missing scopes
      next(boom.unauthorized('Missing scopes'));
    }

    //aca extraemos que el scope que esta quiere utilizar
    //pertenesca a los scopes que tiene acceso el usuario
    const hasAccess = allowedScopes
      .map(allowedScope => req.user.scopes.includes(allowedScope))
      .find(allowed => Boolean(allowed));

    //validamos que el scope si esta entre los permitidos
    if (hasAccess) {
      //avanzamos al siguiente middleware
      next();
    } else {
      //en caso de que no este entre los scopes permitidos
      //retornamos error con un mensaje
      next(boom.unauthorized('Insufficient scopes'));
    }
  };
}

module.exports = scopesValidationHandler;
