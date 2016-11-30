angular
    .module('trumpsNuts')
    .controller('landingController', landingController);

landingController.$inject = ['$log', '$routeParams', '$location', 'dataModel'];

/* @ngInject */
function landingController($log, $routeParams, $location, dataModel) {

	//define view model variable
	var vm = this;
	vm.model = dataModel;
}