/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('progressBar', progressBar);

/* @ngInject */
function progressBar() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/progressBar.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: progressBarController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    progressBarController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function progressBarController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};