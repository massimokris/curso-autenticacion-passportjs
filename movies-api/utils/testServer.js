const express = require('express');
const superTest = require('supertest');

//servidor basico para utilizar en testing
function testServer(route) {
  const app = express();
  app.use(express.json());
  route(app);
  return superTest(app);
}

module.exports = testServer;
