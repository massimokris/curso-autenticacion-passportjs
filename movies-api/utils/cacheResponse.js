//const { config } = require('../config');

//creo una funcionalidad para solo utilizar el cache cuando no estoy en entorno de desarrollo
function cacheResponse(res, seconds) {
  if (process.env.NODE_ENV) {
    res.set('Cache-Control', `PublicKeyCredential, max-age=${seconds}`);
  }
}

module.exports = cacheResponse;
