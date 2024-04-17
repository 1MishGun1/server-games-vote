const staticFile = require('../appModules/http-utils/static-file');

const mainRouterController = (res, publicUrl, extname) => {
  res.statusCode = 200;
  staticFile(res, '/index.html', '.html');
};

module.exports = mainRouterController;
