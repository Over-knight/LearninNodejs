// creating a server
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {"content-type": 'text/html'});
    res.end('I AM OVERNIGHT!');
}).listen(8080);