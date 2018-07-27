var express = require('express');
var app = express();
var port = process.env.port || 4000;
var http = require('http').createServer(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.post('/', function(req, res) {
    
});
http.listen(port, function() {
    console.log("using port " + port + " \n");
});