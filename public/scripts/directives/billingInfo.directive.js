/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('billingInfo', billingInfo);

/* @ngInject */
function billingInfo() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/billingInfo.directive.htm',
		replace: true,
		scope: {
			address: '=',
			payment: '=',
			copyShippingAddress: '=',
			copyShipping: '&'
		},
		link: linkFunc,
		controller: billingInfoController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    billingInfoController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function billingInfoController($scope, $log) {
	    var vm = this;

	    //view model methods
	    vm.toggleAddressCopy = function(btnState) {

	    	vm.copyShipping()(btnState);

	    }
	}

	return  directive;
		
};