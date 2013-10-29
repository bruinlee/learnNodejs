var http = require("http");//require the http module
//then call createServer function, it returns an object, and this object has a
//method named listen
//so it can also be
//var server = http.createServer();
//server.listen(8888);
//
http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World? make some noise!");
  response.end()
}).listen(8888);

//in js
//you can do
function say(word){
  console.log(word);
}
function execute(someFunction, value){
  someFunction(value);
}

execute(say, "Hello");

//execute(function(word){
//  console.log(word);
//}, "hello");
