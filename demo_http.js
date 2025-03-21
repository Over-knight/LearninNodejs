var http = require('http');
http.createServer(function (req, res){
    res.write('overnight'); //a response to the client
    res.end();//end the response
}).listen(8080);