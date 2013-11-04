function route(handle, pathname){
  console.log("About to route a request for " + pathname);
  if(typeof handle[pathname] === 'function'){
    return handle[pathname]();//like access an element of an associative array
  }else{
    console.log("No request handler found for " + pathname);
    return "404 Not Found";
  }
}

exports.route = route;
