angular
    .module('trumpsNuts')
    .service('server', server);

server.$inject = ['$log', '$http'];

/* @ngInject */
function server($log, $http) {
	var backend = this;

	//gets from the server
	backend._get = function(url) {

		return new Promise(function(resolve, reject) {

			$http.get(url).then(function(response) {

				resolve(response.data);

			}, function theErrors(error) {

				reject(error);

			});

		});

	}

	//posts to the server
	backend._post = function(url, data, config) {

		$log.info('url', url, 'data', data);

		//return the promise
		return new Promise(function(resolve, reject) {

			$http.post(url, data, config).then(function(response) {

				resolve(response);

			}, function theErrors(error) {

				reject(error);

			});

		});

	}

	//receives a zipcode, returns a city and state
	backend.cityStateLookup = function(zipcode) {

		//build the new url
		var url = '/api/zipcheck/' + zipcode;

		//return the promise
		return new Promise(function(resolve, reject) {

			//initiate the request
			backend._get(url).then(function(response) {

				//return a good response
				resolve(response);

			}).catch(function(error) {

				//return an error response
				reject(error);
				
			});

		});

	}

	backend.submitSale = function(orderForm) {

		$log.info('submitting sale');

		//define local variable
		var config = {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		};

		//return the promise
		return new Promise(function(resolve, reject) {

			//initiate the request
			backend._post('/api/order', orderForm, config).then(function(response) {

				//return a good response
				resolve(response);

			}).catch(function(error) {

				reject(error);

			});

		});

	}

}