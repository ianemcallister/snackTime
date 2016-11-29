/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('yourName', yourName);

/* @ngInject */
function yourName() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/yourName.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: yourNameController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    yourNameController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function yourNameController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};