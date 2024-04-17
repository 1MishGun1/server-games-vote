const parseBody = require('../appModules/http-utils/parse-body');

const voteRouteController = async (req, res) => {
  if (res.method !== 200) {
    res.statusCode = 404;
    res.end('Not Found');
    parseBody(req, (err, body) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
      console.log(body);
      res.statusCode = 200;
      res.end('Success!');
    });
  }
};

module.exports = voteRouteController;
