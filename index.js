var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//JS objects are just collections of name/value pairs, values can be
//strings, numbers, functions etc.
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle);
