//importo la libreria de mongo con todas sus funcinalidades
const MongoLib = require('../lib/mongo');
//importo libreria de encryptado
//para encriptar password y demas datos sensibles que deba persistir en la bse
const bcrypt = require('bcryptjs');

class UsersService {
    //creo el constructor de la clase
    constructor() {
        //instanciar el nombre de la colleccion de este schema
        this.collection = 'users';
        //instancia de mongolib para utilizar sus funcionalidades
        this.mongoDB = new MongoLib();
    }

    /**
     * Request to get all users by email
     * @param {string} email el email del usuario 
     */
    async getUser({ email }) {
        const [ user ] = await this.mongoDB.getAll(this.collection, { email });
        return user;
    }


    async createUser({ user }) {
        //desestructuro el objeto que recibo en la llamada a funcion
        const { name, email, password } = user;
        //encripto la password del usuario para luego esta persistirla en la base
        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUserId = await this.mongoDB.create(this.collection, {
            name,
            email,
            password: hashedPassword
        });

        return createdUserId;
    }
}

module.exports = UsersService;