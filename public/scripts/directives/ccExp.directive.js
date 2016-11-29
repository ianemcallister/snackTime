/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('ccExp', ccExp);

/* @ngInject */
function ccExp() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ccExp.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: ccExpController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ccExpController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ccExpController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};