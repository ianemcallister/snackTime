angular
    .module('ahNutsWebApp')
    .service('server', server);

server.$inject = ['$log', '$http'];

/* @ngInject */
function server($log, $http) {
	var backend = this;

	//gets from the server
	backend._get = function(url) {

		return new Promise(function(resolve, reject) {
			resolve('good test');
		});

	}

	//posts to the server
	backend._post = function(url, package) {}

	//receives a zipcode, returns a city and state
	backend.cityStateLookup = function(zipcode) {
		
	}

}