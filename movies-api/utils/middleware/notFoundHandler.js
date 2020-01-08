const boom = require('@hapi/boom');

//muestro un error mas amigable cuando una ruta no es encontrada
function notFoundHandler(req, res) {
  const {
    output: { statusCode, payload }
  } = boom.notFound();

  res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;
