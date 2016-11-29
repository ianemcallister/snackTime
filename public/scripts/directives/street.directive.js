/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('street', street);

/* @ngInject */
function street() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/street.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: streetController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    streetController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function streetController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};