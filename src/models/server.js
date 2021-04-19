const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;

    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'get API',
      });
    });

    this.app.put('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'put API',
      });
    });

    this.app.post('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'post API',
      });
    });

    this.app.delete('/api', (req, res) => {
      res.json({
        ok: true,
        msg: 'delete API',
      });
    });
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static('public'));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Listening at port ${this.PORT}`);
    });
  }
}

module.exports = Server;
