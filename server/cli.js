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
				package: 
					[
						{
							service: "EXPRESS",
							pounds: 0,
							ounces: 10,
							zipOrigination: 97005,
							zipDestination: 97405,
							size: 'Large',
							girth: 5,
							width: 5,
							length: 5,
							height: 5
						}
					]
			}

API.postageCalculator(data).then(function(response) {
	console.log('response', response);
}).catch(function(error) {
	console.log('got this error', error);
});
