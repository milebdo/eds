var http = require("http");
var express = require('express');
var app = express();
var config = require('./config')();

app.get('/', function (req, res) {
  res.send('Hello World!');
})

http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});
