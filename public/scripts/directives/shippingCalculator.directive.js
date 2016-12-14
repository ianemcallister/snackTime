/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('shippingCalculator', shippingCalculator);

/* @ngInject */
function shippingCalculator() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/shippingCalculator.directive.htm',
		replace: true,
		scope: {
			serviceClass: '=',
			cost: '='
		},
		link: linkFunc,
		controller: shippingCalculatorController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
	
    }

    shippingCalculatorController.$inject = ['$scope', '$log', 'server'];
    /* @ngInject */
    function shippingCalculatorController($scope, $log, server) {
	    var vm = this;

	    $scope.$watch('vm.serviceClass.isPriority', function(current, original) {
	    	//$log.info('vm.serviceClass.isPriority', vm.serviceClass.isPriority, vm.serviceClass.express.cost.amount, vm.cost);

	    	if(vm.serviceClass.isPriority == 'true') {
	    		//$log.info('is priority');
	    		vm.cost.amount = (vm.serviceClass.priority.cost.amount * 100);
	    		
	    	} else {
	    		//$log.info('is express');
	    		vm.cost.amount = (vm.serviceClass.express.cost.amount * 100);

	    	}

	    });

	    $scope.$watch('vm.serviceClass.priority.cost.amount', function(current, original) {
	    	$log.info('vm.serviceClass.isPriority', vm.serviceClass.isPriority, vm.serviceClass.express.cost.amount, vm.cost);

	    	if(vm.serviceClass.isPriority == 'true') {
	    		//$log.info('is priority');
	    		vm.cost.amount = (vm.serviceClass.priority.cost.amount * 100);
	    	} else {
	    		//$log.info('is express');
	    		vm.cost.amount = (vm.serviceClass.express.cost.amount * 100);
	    	}

	    });

	}

	return  directive;
		
};