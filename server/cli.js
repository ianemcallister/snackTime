var API = require('./API/api');

API.init();

/*API.zipCheck(['90210']).then(function(response) {

	console.log('got this response', response);

}).catch(function(error) {

	console.log('got this error', error);
});*/

API.processOrder({

}).then(function(response) {

	console.log(response);

}).catch(function(error) {

	console.log(error);
});
