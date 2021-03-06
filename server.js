var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

app.all('/', function (req, res){
    console.log(req)
    res.send(true);
});



httpServer.listen(8081, () => console.log('listening to port 8081!'));
httpsServer.listen(8444 , () => console.log('listening to port 8444!'));