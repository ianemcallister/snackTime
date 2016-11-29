/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('city', city);

/* @ngInject */
function city() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/city.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: cityController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    cityController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function cityController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};