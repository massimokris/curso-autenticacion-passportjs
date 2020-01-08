//requerimos passport para manejar la seguridad
const passport = require('passport');

//requerimos la estrategia de autenticacion jwt
//de la libreria passport-http
const { Strategy, ExtractJwt } = require('passport-jwt');

//requerimos boom para el manejo de errores
const boom = require('@hapi/boom');

//requiero el servicio de usuario
//para el manejo de sus datos
const UsersService = require('../../../services/users');

//traemos la cofiguracion de nuestra aplicacion
//para utilizar el auth secret
const { config } = require('../../../config/index');

//definimos la estrategia que va a utilizar nuestro servicio
passport.use(
  //indicamos la estrategia a utilizar
  //a la estrategia le pasamos
  //el secret de nuestro sistema de autenticación
  //de donde va a extraer la data a verificar
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    //en la funcion callback donde validamos toda la infomración
    async (tokenPayload, cb) => {
      const usersService = new UsersService();

      try {
        const user = await usersService.getUser({ email: tokenPayload.email });

        //verificamos que pudimos recibir el usuario
        if (!user) {
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
        cb(null, { ...user, scopes: tokenPayload.scopes });
      } catch (error) {
        //manejo el error con el callback que recibo como parametro
        return cb(error);
      }
    }
  )
);
