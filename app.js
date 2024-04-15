const http = require("http");
const staticFile = require("./appModules/http-utils/static-file");
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.statusCode = 200;
      staticFile(res, "/index.html", ".html");
      break;
  }
});
