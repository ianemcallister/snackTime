var API = require('./API/api');

API.init();

/*API.zipCheck(['90210']).then(function(response) {

	console.log('got this response', response);

}).catch(function(error) {

	console.log('got this error', error);
});*/

/*API.processOrder({
	email: 'ian@ah-nuts.com'
}).then(function(response) {

	console.log(response);

}).catch(function(error) {

	console.log(error);
});*/

var data = {
	
}

/*API.postageCalculator(data).then(function(response) {
	console.log('response', response);
}).catch(function(error) {
	console.log('got this error', error);
});*/

API.processOrder(data).then(function(response) {
	console.log('response', response);
}).catch(function(error) {
	console.log('got this error', error);
});
