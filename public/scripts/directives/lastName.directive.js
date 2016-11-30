/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('lastName', lastName);

/* @ngInject */
function lastName() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/lastName.directive.htm',
		replace: true,
		scope: {
			last: '='
		},
		link: linkFunc,
		controller: lastNameController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    lastNameController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function lastNameController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};