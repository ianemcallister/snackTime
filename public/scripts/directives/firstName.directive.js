/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('firstName', firstName);

/* @ngInject */
function firstName() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/firstName.directive.htm',
		replace: true,
		scope: {
			first: '='
		},
		link: linkFunc,
		controller: firstNameController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    firstNameController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function firstNameController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};