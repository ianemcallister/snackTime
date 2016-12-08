/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('shippingInfo', shippingInfo);

/* @ngInject */
function shippingInfo() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/shippingInfo.directive.htm',
		replace: true,
		scope: {
			address: '=',
			requirnments: '=',
			cost: '=',
			qty: '='
		},
		link: linkFunc,
		controller: shippingInfoController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    shippingInfoController.$inject = ['$scope', '$log', 'server'];
    /* @ngInject */
    function shippingInfoController($scope, $log, server) {
	    var vm = this;

	    //$log.info('vm.requirnments', vm.requirnments, 'vm.cost', vm.cost);
	    //view model methods
	    vm.calculateShipping = function(zipPoints) {
	    	$log.info('calculating the info now', zipPoints);

	    	//get the shipping info from USPS API
	    	server.postageCalculator(zipPoints, vm.qty).then(function(response) {
	    		
	    		vm.requirnments.dataAquired = true;

	    		$log.info('got this back from postageCalculator', response, vm.requirnments.dataAquired);

	    	}).catch(function(error) {
	    		$log.info('got this error from the postageCalculator', error);
	    	})
	    }


	}

	return  directive;
		
};