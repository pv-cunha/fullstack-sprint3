var http = require('http'),
  app = require('./config/express');

http.createServer(app).listen(3000, function () {
  console.log('Servidor no ar em: http://localhost:' + this.address().port);
});
