var fs =require('fs');

function callBack(err, results){
	if(err) return handleError(err);
	console.log('File contents:', results);
}

function handleError(err){
	console.log(err);
}
fs.readFile('info', 'utf-8', callBack);
