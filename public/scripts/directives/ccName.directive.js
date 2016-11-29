/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('ccName', ccName);

/* @ngInject */
function ccName() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ccName.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ccNameController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ccNameController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ccNameController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};