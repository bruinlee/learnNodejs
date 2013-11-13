var http = require("http");
var url = require("url");

function start(route, handle){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    route(handle, pathname, response, request);
    //
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //var content = route(handle, pathname);
    //response.write(content);
    //response.end();
  }

  http.createServer(onRequest).listen(8888);
  /*
  http.createServer(onRequest).listen(8888,function(){
    server.close(function(){
      server.listen(8001, '192.168.0.202');
    });
  });
  */
  //var server = http.createServer(app);
  //server.listen(8001, '192.168.0.255');
  console.log("Server has started.");

}
exports.start = start;//export this function, make server.js a module
