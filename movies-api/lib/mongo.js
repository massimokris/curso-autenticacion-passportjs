const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

//usuario tomado del config que a su vez fue tomado del .env
const USER = encodeURIComponent(config.dbUser);

//password tomado del config que a su vez fue tomado del .env
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

//mongo uri con una ternaria que indica que si lo estoy corriendo en dev o production le seteo instancia distinta de mi BBDD
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = DB_NAME;
  }

  //metodo de coneccion a la BDD
  connect() {
    //implemento singleton para tener una unica instancia de la BDD
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          }

          console.log(`Connected succesfully to mongo ${MONGO_URI}`);
          resolve(this.client.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }

  /**
   * Return an array of movies
   * @param {*sting} collection
   * @param {*null} query
   */
  getAll(collection, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(query)
        .toArray();
    });
  }

  /**
   * Return a movie object
   * @param {*string} collection
   * @param {*ObjectId} id
   */
  get(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }

  /**
   * Create a new movie and return the id
   * @param {*sting} collection
   * @param {*object} data
   */
  create(collection, data) {
    return this.connect()
      .then(db => {
        return db.collection(collection).insertOne(data);
      })
      .then(result => result.insertedId);
  }

  /**
   * Update a movie and return the id
   * @param {*sting} collection
   * @param {*ObjectId} id
   * @param {*object} data
   */
  update(collection, id, data) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then(result => result.upsertedId || id);
  }

  /**
   * Delete a movie and return the id
   * @param {*string} collection
   * @param {*ObjectId} id
   */
  delete(collection, id) {
    return this.connect()
      .then(db => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }
}

module.exports = MongoLib;
