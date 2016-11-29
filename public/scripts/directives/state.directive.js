/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('state', state);

/* @ngInject */
function state() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/state.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: stateController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    stateController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function stateController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};