'use static'

var unirest = require('unirest');

var square = {
	_getLocations:_getLocations,
	runCC: runCC
};

var base_url = "https://connect.squareup.com/v2";

//private methods
function _getLocations() {

	//return a promise
	return new Promise(function(resolve, reject) {
		unirest.get(base_url + 'locations')
		.headers({
			'Authorization': 'Bearer ' + process.env.SQUARE_SANDBOX_APP_TOKEN,
			'Accept': 'application/json'	
		})
		.end(function(response) {

			//if successful, return locations
			resolve(response);
		});

	});

}

//public methods
function runCC(data) {
	var sqr = this;

	console.log('runCC', data);

	return new Promise(function(resolve, reject) {
		
		sqr._getLocations().then(function(response) {

			//define a unique token
			var token = require('crypto').randomBytes(64).toString('hex');


			var request_body = {
				card_nonce: data.nonce,
				amount_money: {
					amount: 2000,
					currency: 'USD'
				},
				idempotency_key: token
			};

			//if we got a good response, send the acutal request
			unirest.post(base_url + '/locations/' + 'CBASECj4vA2gWFe7i9yDyiz6pfE' + '/transactions')
			.headers({
				'Authorization': 'Bearer ' + process.env.SQUARE_SANDBOX_APP_TOKEN,
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			})
			.send(request_body)
			.end(function(response) {
				if(response.body.errors) {
					reject({status: 400, errors: response.body.errors});
				} else {
					resolve({status: 200, data: response.body});
				}
			});

		}).catch(function(error) {
			reject(error);
		});

	});

}

module.exports = square;