const jwt = require('jsonwebtoken');

//vamos a sacar los argumentos de la terminal
//process argument (process.argv) lee los comandos de la terminal
//los primeros 2 parametros son el proceso de node y el archivo que estamos leyendo
//luego el option es la opcion si firmamos o verificamos
const [, , option, secret, nameOrToken ] =  process.argv;

//validamos que no falten argumentos y en caso tal enviamos mensaje de error
if (!option || !secret || !nameOrToken) {
    return console.log('Missing arguements');
}

//funcion para firmar un JWT
function signToken(payload, secret) {
    return jwt.sign(payload, secret);
}

//funcion para decodificar un JWT
function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

if(option === 'sign') {
    console.log(signToken({sub: nameOrToken}, secret));
} else if (option === 'verify') {
    console.log(verifyToken(nameOrToken, secret));
} else {
    console.log('Option needs to be "sign or "verify"');
}