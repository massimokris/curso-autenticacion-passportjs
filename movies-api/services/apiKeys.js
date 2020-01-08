//requerimos mongo lib 
//para definir como vamos a firmar los api token
//en base a los scopes que definimos
const MongoLib = require('../lib/mongo');

//este servicio nos va a permitir que
//apartir de un api token 
//definir los scopes
class ApiKeysService {
    constructor() {
        this.collection = 'api-keys';
        this.mongoDB = new MongoLib();
    }

    async getApiKey({ token }) {
        //obtenemos el apiKey de la base
        //a partir de un token que recibimos
        const [ apiKey ] = await this.mongoDB.getAll(this.collection, { token });
        return apiKey;
    }
}

module.exports = ApiKeysService;