/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('emailAddress', emailAddress);

/* @ngInject */
function emailAddress() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/emailAddress.directive.htm',
		replace: true,
		scope: {},
		link: linkFunc,
		controller: emailAddressController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    emailAddressController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function emailAddressController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};