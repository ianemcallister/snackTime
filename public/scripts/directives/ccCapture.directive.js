/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('ccCapture', ccCapture);

/* @ngInject */
function ccCapture() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ccCapture.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ccCaptureController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ccCaptureController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ccCaptureController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};