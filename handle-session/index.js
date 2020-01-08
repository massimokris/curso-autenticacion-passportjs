const express = require("express");
const session = require("express-session");

//instancio un servidor de express
const app = express();

//defino que voy a utilizar la session en ese servidor
app.use(
  session({
    //con resave le indico que guarde o no la cookie cada vez que se haga un cambio
    resave: false,
    //defino que la cookie no se ha inicializado no se guarde
    saveUninitialized: false,
    //defino un secret que debe ser un string de 256bits
    //esto indica que cuando la cookie es segura la cifre utilizando ese secret
    secret: "keyboard cat"
  })
);

app.get('/', (req, res) => {
  //defino que si la sesion existe
  //el valor de session.count sea el mismo + 1
  //si no existe, inicializo el valor en 1
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  //en modo de ejemplo le envio un status 200 y un mensaje el formato json
  res.status(200).json({ hello: "world cookie", counter: req.session.count });
});

//nodemon sirve para que cada vez que hacemos una actualizacion
//en el codigo el servidor se actualice
app.listen(3000, () => {
  console.log(`Listening http://localhost:3000`);
});
