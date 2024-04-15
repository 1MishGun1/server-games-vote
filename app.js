const http = require("http");
const path = require("path");
const mimeTypes = require("./appModules/http-utils/mine-types");

const staticFile = require("./appModules/http-utils/static-file");
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.statusCode = 200;
      staticFile(res, "/index.html", ".html");
      break;

    default:
      const extname = String(path.extname(url)).toLowerCase();
      if (extname in mimeTypes) {
        staticFile(res, url, extname);
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
  }
});

server.listen(3005);
