/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('purchaseBtn', purchaseBtn);

/* @ngInject */
function purchaseBtn() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/purchaseBtn.directive.htm',
		replace: true,
		scope: {
			submitForm: '&'
		},
		link: linkFunc,
		controller: purchaseBtnController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    purchaseBtnController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function purchaseBtnController($scope, $log) {
	    var vm = this;

	}

	return  directive;
		
};