const parseBody = (req, callback) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    callback(null, body);
  });
  req.on('err', (err) => {
    callback(err, null);
  });
};

module.exports = parseBody;
