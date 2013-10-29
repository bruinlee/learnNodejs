var result = database.query("SELECT * FROM hugetable");
console.log("Hello World");


//execution model of Node.js
//there is only one single process,if there is a slow query, this affects
//the whole process
//event-driven, asunchronos callbacks, utilize an event loop
//
//rewrite the code
database.query("SELECT * FROM hugetable", function(rows){
  var result = rows;
});
console.log("Hello World");
