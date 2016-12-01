/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('productSelection', productSelection);

/* @ngInject */
function productSelection() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/productSelection.directive.htm',
		replace: true,
		scope: {
		},
		link: linkFunc,
		controller: productSelectionController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    productSelectionController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function productSelectionController($scope, $log) {
	    var vm = this;


	}

	return  directive;
		
};