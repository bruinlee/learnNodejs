var net = require('net');
var format = require('util').format;

var server = net.createServer();

server.on('connection', function(conn){
	var printPrefix = '[' + conn.remoteAddress + ':' + conn.remotePort + '] ';

	function print(){
		var formatted = format.apply({}, arguments);
		console.log(printPrefix + formatted);
	}
	print('connected');
	
	function dataHandler(data){
		print('got some data: ' + data);
		conn.emit('error', new Error('something happened!'));
	}


	conn.on('data', dataHandler);
	//remove listener
	setTimeout(function(){
		conn.removeListener('data', dataHandler);
	}, 5000);

	conn.on('end', function(){
		print('ended.');
	});

	conn.on('close', function(){
		print('closed.');
	});

	conn.on('error', function(err){
		print('error: ' + err);
	});

	conn.setEncoding('utf-8');
});

server.on('error', console.error);

process.on('uncaughtException', function(err){
	console.log('uncaught exception: ' + err);
	process.exit();
});

server.listen(8888);


