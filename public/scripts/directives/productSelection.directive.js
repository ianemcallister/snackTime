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
			qty: '=',
			price: '=',
			subtotal: '='
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

	    //private methods


	    //view model methods
	    vm.calculateSubtotal = function() {
	    	vm.subtotal = vm.qty * vm.price;
	    }

	   	vm.decrement = function() {
	    	if(vm.qty > 1) vm.qty = vm.qty - 1;

	    	vm.calculateSubtotal();
	    }

	    vm.increment = function() {
	    	vm.qty = vm.qty + 1;

	    	vm.calculateSubtotal();
	    }

	}

	return  directive;
		
};