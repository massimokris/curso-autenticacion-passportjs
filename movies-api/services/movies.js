//const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  /**
   * Return an array of movies
   * @param {*null} param0
   */
  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  /**
   * Return a specific movie
   * @param {*ObjectId} param0
   */
  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  /**
   * Create a movie
   * @param {*object} param0
   */
  async createMovie({ movie }) {
    const createdMovieId = await this.mongoDB.create(this.collection, movie);
    return createdMovieId;
  }

  /**
   * Delete a specific movie
   * @param {*ObjectId} param0
   */
  async deleteMovie({ movieId }) {
    const deletedMovieId = await this.mongoDB.delete(this.collection, movieId);
    return deletedMovieId;
  }

  /**
   * Update a specific movie
   * @param {*ObjectId} param0
   * @param {*object} param0
   */
  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this.mongoDB.update(
      this.collection,
      movieId,
      movie
    );
    return updatedMovieId;
  }
}

module.exports = MoviesService;
