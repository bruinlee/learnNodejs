var flight = require('./flight');

var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

var pl = flight(pdxlax);

pl.triggerDepart();

console.log(pl.getInformation());

var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'LAX'
};

var ad = flight(ausdca);

ad.triggerDepart();

console.log(ad.getInformation());


