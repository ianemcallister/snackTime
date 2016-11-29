/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('ccCSV', ccCSV);

/* @ngInject */
function ccCSV() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ccCSV.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ccCSVController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ccCSVController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ccCSVController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};