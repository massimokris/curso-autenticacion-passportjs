const MongoLib = require('../lib/mongo');

//creo la clase de userMoviesService
//la cual contiene toda la logica de negocio de este servicio de nuestra app
class UserMoviesService {
  constructor() {
    //instancio el nombre de la coleccion donde almacenare esta relacion
    this.collection = 'user-movies';
    //instancio las utilidades de mongo
    this.mongoDB = new MongoLib();
  }

  async getUserMovies({ userId }) {
    //creamos un query
    //para que no traiga las peliculas que tengan como id de usuario el id recibido
    const query = userId && { userId };
    //ejecuto el metodo getAll de mongo
    //en una collection especifica y con una query que le paso como parametro
    const userMovies = await this.mongoDB.getAll(this.collection, query);

    //retorno el array con todas las peliculas del usuario
    //en cado de que no exista ninguna retorno un array vacio
    return userMovies || [];
  }

  async createUserMovie({ userMovie }) {
    //creo un user movie en base al objeto que recibo como parametro
    const createdUserMovieId = await this.mongoDB.create(
      this.collection,
      userMovie
    );

    //retorno el id de ese documento creado
    return createdUserMovieId;
  }

  async deleteUserMovie({ userMovieId }) {
    //elimino un user movie en base al objeto que recibo como parametro
    const deletedUserMovieId = await this.mongoDB.delete(
      this.collection,
      userMovie
    );

    //retorno el id de ese documento eliminado
    return deletedUserMovieId;
  }
}

module.exports = UserMoviesService;
