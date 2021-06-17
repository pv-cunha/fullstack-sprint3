/* Código simplório, apenas para fornecer o serviço para a aplicação */

const products = require('../api/products');

module.exports = function (app) {
  app.route('/api/products').get(products.all);
};
