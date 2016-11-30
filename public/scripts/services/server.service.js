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
	backend._post = function(url, package) {}

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

}