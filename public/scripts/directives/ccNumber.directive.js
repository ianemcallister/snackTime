/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('ccNumber', ccNumber);

/* @ngInject */
function ccNumber() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ccNumber.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ccNumberController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ccNumberController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ccNumberController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};