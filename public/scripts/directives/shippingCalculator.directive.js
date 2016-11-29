/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('shippingCalculator', shippingCalculator);

/* @ngInject */
function shippingCalculator() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/shippingCalculator.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: shippingCalculatorController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    shippingCalculatorController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function shippingCalculatorController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};