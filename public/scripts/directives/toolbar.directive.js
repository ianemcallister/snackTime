/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('toolBar', toolBar);

/* @ngInject */
function toolBar() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/toolBar.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ToolBarController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ToolBarController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ToolBarController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};