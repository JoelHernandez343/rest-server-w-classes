const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/config');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    await dbConnection();
  }

  routes() {
    this.app.use('/api/users', require('../routes/users'));
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Listening at port ${this.PORT}`);
    });
  }
}

module.exports = Server;
