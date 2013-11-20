var dns = require('dns');

//function callBack(){}

dns.lookup('google.com', function(err, ip){
	if(err) return;
	console.log('google.com resolved to %s', ip);
});
