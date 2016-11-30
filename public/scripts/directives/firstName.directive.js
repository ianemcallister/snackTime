/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('firstName', firstName);

/* @ngInject */
function firstName() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/firstName.directive.htm',
		replace: true,
		scope: {
			first: '='
		},
		link: linkFunc,
		controller: firstNameController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    firstNameController.$inject = ['$scope', '$log', 'stateData'];
    /* @ngInject */
    function firstNameController($scope, $log, stateData) {
	    var vm = this;

	    //$log.info(state);

	    vm.state = {
		    container: {
		    	classes: stateData.initClasses('container'),
		    	styles: stateData.initStyles('container')	    		
	    	}, 
	    	input: {
		    	classes: stateData.initClasses('input'),
		    	styles: stateData.initStyles('container')
	    	}
	    }

	    //view model methods
	    vm.validate = function(field, value) {
	    	
	    	//if(value.length > 1) state.changeState.inputSuccess()

	    }
	}

	return  directive;
		
};