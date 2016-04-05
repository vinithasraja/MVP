var linksController = require('../links/linkController.js');
var shortenController = require('../shorten/shortenController.js');

var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {


  

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
  app.get('/api/links', linksController.allLinks);
   app.post('/api/shorten', shortenController.createOne);

  // If a request is sent somewhee other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

