function responseRead(response){
	console.log(response);
}

for(var i = 0; i < 100; i++){
	db.query(
	'SELECT * FROM articles WHERE id = ?',
	i,
	responseReady
	);
}
