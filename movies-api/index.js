const express = require('express');
const cors = require('cors');

//instanciamos un servidor de express para utilizar al exponer la rutas de nuestros servicios
const app = express();

//importamos la configuracion de nuestras variables de entorno
const { config } = require('./config/index');

//importamos las rutas de autenticacion
const authApi = require('./routes/auth');

//importamos las rutas
//importamos las rutas para movies (get, post, delete, put)
const moviesApi = require('./routes/movies');

//importamos las rutas para user movies (get, post, delete);
const userMoviesApi = require('./routes/userMovies');

//importamos middleware de errores
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//middelware body parser
//le indicamos que va a usar json para parsear los body de los request
app.use(express.json());
app.use(cors());

//crear un ruta en express
//con app le indicamos que metodo va a utilizar (get, post, put, etc)
//como primer parametro la ruta
//como segundo parametro un callback que va a tener un request y un response
// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.get('/json', (req, res) => {
//     res.json({hello: 'world'});
// });

//challenge para crear endpoint que resiva una año
//y retorna si es bisiesto o no
// app.get('/challenge/:year', (req, res) => {
//     let bisiesto = true;
//     const year = req.params.year;
//     if (year %4 === 0) {
//         if (year %100 === 0) {
//             bisiesto = false;
//         }
//     } else {
//         bisiesto = false;
//     }
//     res.send(`Bisiesto: ${bisiesto}`);
// });

//routes
//instancio las rutas de los distintos servicios
//le indico que su router va a ser la instancia del servidor de express
authApi(app);
moviesApi(app);
userMoviesApi(app);

//Catch 404
//le indico al router que va a utilizar este middleware para todas las rutas no encontradas
app.use(notFoundHandler);

//Errors middelware
//le indico al router que va a utilizar estos middleware para manejar los distintos errores que surjan
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
