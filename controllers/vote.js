const fs = require('fs').promises;
const parseBody = require('../appModules/http-utils/parse-body');

const voteRouteController = async (req, res) => {
  if (res.method !== 200) {
    res.statusCode = 404;
    res.end('Not Found');
  } else {
    try {
      const body = await parseBody(req);
      console.log(body);
      res.statusCode = 200;
      res.end('Success!');
    } catch (error) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }
};

module.exports = voteRouteController;
