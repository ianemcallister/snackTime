/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('zipCode', zipCode);

/* @ngInject */
function zipCode() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/zipCode.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: zipCodeController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    zipCodeController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function zipCodeController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};