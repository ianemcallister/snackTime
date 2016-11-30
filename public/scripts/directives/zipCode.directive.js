/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('zipCode', zipCode);

/* @ngInject */
function zipCode() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/zipCode.directive.htm',
		replace: true,
		scope: {
			uniqueId: '=',
			zip: '='
		},
		link: linkFunc,
		controller: zipCodeController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    zipCodeController.$inject = ['$scope', '$log', 'server', 'stateData'];
    /* @ngInject */
    function zipCodeController($scope, $log, server, stateData) {
	    var vm = this;
	    
	    //define viewmodel variables
	    vm.valStages = stateData.initValStages();

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

	    function longEnough(zipcode) {
	    	var flag = false;

	    	if(typeof zipcode != 'undefined')
	    		if(zipcode.length >= 5) flag = true;

	    	return flag;
	    }

	    function successifyInput() { 
	    	//$log.info('success', vm.state.container);
	    	vm.state.container.classes = stateData.updateState('container', 'success');
	    	//vm.state.container.classes['has-success'] = true;
	    	//vm.state.container.classes['has-warning'] = false;
	    	//vm.state.container.classes['has-danger'] = false;
	    	vm.state.input.classes = stateData.updateState('input', 'success');
	    	//vm.state.input.classes['form-control-success'] = true;
	    	//vm.state.input.classes['form-control-warning'] = false;
	    	//vm.state.input.classes['form-control-danger'] = false;
	    }

	    function failifyInput() { 
	    	//$log.info('failed');
	    	vm.state.container.classes['has-success'] = false;
	    	vm.state.container.classes['has-warning'] = true;
	    	vm.state.container.classes['has-danger'] = false;

	    	vm.state.input.classes['form-control-success'] = false;
	    	vm.state.input.classes['form-control-warning'] = true;
	    	vm.state.input.classes['form-control-danger'] = false;
	    }

	    function cityStateLookup(zipcode) {
		    server.cityStateLookup(zipcode).then(function(response) {
		    	$log.info('got this response', response);
		    }).catch(function(error) {
		    	$log.info('got this error', error);
		    });	    	
	    }

	    vm.validate = function(zipcode) {

	    	//only validate if they've tried at least once
	    	if(vm.valStages.attempted) {

	    		//check if it's long enough
	    		if(longEnough(zipcode)) successifyInput();
	    		else failifyInput();

	    	}

	    }

	    vm.submit = function(zipcode) {

	    	vm.valStages.attempted = true;

	    	vm.validate(zipcode);
	    }

	}

	return  directive;
		
};