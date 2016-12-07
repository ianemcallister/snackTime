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
							service: "PRIORITY",
							pounds: 5,
							ounces: 8,
							zipOrigination: 97005,
							zipDestination: 90046,
							pounds: 1,
							size: 'Large',
							girth: 55,
							width: 15,
							length: 15,
							height: 5
						}
					]
			}

API.postageCalculator(data).then(function(response) {
	console.log('response', response);
}).catch(function(error) {
	console.log('got this error', error);
});
