//requerimos passport para manejar la seguridad
const passport = require('passport');

//requerimos la estrategia de autenticacion basic
//de la libreria passport-http
const { BasicStrategy } = require('passport-http');

//requerimos boom para el manejo de errores
const boom = require('@hapi/boom');

//requerimos bcryptjs para validar password
const bcrypt = require('bcryptjs');

//requiero el servicio de usuario
//para el manejo de sus datos
const UsersService = require('../../../services/users');

//defino la estrategia que va a usar nuestro passport
passport.use(
  new BasicStrategy( async (email, password, cb) => {
    //instancio los servicio que voy a utilizar del usuario
    const userServices = new UsersService();

    try {
      const user = await userServices.getUser({ email });

      //verificamos que pudimos recibir el usuario
      if (!user) {
        //en caso de error
        //manejamos con el callback
        //y con la libreria boom enviamos un unauthorized
        return cb(boom.unauthorized(), false);
      }

      //validamos la password del usuario
      //con la libreria bcrypt
      //para manejar los datos encriptados
      if ( !( await bcrypt.compare(password, user.password) ) ) {
        //en caso de error
        //manejamos con el callback
        //y con la libreria boom enviamos un unauthorized
        return cb(boom.unauthorized(), false);
      }

      //eliminamos la password del objeto usuario
      //para no enviar esa informacion
      delete user.password;

      //en caso de pasar las validaciones
      //enviamos un error nullo
      //y todos los datos del usuario sin su contraseña
      return cb(null, user);
    } catch (error) {
      //manejo el error con el callback que recibo como parametro
      return cb(error);
    }
  })
);
