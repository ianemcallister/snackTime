angular
    .module('trumpsNuts')
    .controller('landingController', landingController);

landingController.$inject = ['$log', '$routeParams', '$location', 'dataModel', 'server'];

/* @ngInject */
function landingController($log, $routeParams, $location, dataModel, server) {

	//define view model variable
	var vm = this;
	vm.model = dataModel;

	vm.submitForm = function(value) {
		$log.info('submitting', value);

		server.submitSale(vm.model).then(function(response) {

			$log.info(response);

		}).catch(function(error) {

			$log.info(error);
		});
	}
}	