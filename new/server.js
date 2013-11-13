var http = require("http"),
    url  = require("url");
    fs   = require("fs");

http.createServer(function (request, response){
	var get = url.parse(request.url).pathname;
	request.on("end", function(){
		console.log("request end");
		fs.readFile("test.txt", "utf-8", function(error, data){
			response.writeHead(200, {"Content-Type": "text/plain"});
			data = parseInt(data) + 1;
			fs.writeFile("test.txt", data);
			response.write("This page is refreshed " + data + " times!");
			console.log("read file");
			response.end("Hello");
		});
	});
	response.write("here is data: " + get);
	//response.end("Hello");

}).listen(8888);
