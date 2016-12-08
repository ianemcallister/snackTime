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
			cost: '='
		},
		link: linkFunc,
		controller: shippingInfoController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    shippingInfoController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function shippingInfoController($scope, $log) {
	    var vm = this;

	    //$log.info('vm.requirnments', vm.requirnments, 'vm.cost', vm.cost);
	    //view model methods
	    vm.calculateShipping = function(zipPoints) {
	    	$log.info('calculating the info now', zipPoints);
	    }


	}

	return  directive;
		
};