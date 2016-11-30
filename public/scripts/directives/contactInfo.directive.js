/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('contactInfo', contactInfo);

/* @ngInject */
function contactInfo() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/contactInfo.directive.htm',
		replace: true,
		scope: {
			name: '=',
			email: '='
		},
		link: linkFunc,
		controller: contactInfoController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    contactInfoController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function contactInfoController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};