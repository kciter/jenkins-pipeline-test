var http = require('http');
var fs = require('fs');

var app = http.createServer(function (request,response) {
  var url = request.url;
  response.writeHead(200);
  response.end('Hello, AWS!');
});

app.listen(3000);
