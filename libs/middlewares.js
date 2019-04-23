var bodyParser = require('body-parser');

module.exports = app => {
  app.set("port", 3000);
  app.set("json spaces", 4);
  app.set(bodyParser.json());
  app.set((req, res, next) => {
    // Middleware de pré-execução das rotas
    delete req.body.id;
    next();
  });
};