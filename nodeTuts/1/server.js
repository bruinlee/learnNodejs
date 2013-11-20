var http = require('http');

var server = http.createServer();

function handleRequest(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("Hello");
	res.end();
}

server.on("request", handleRequest);

server.listen(8888);
