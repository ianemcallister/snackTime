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
			zip: '=',
			cityName: '=',
			stateId: '=',
			calculateShipping: '&'
		},
		link: linkFunc,
		controller: zipCodeController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    zipCodeController.$inject = ['$scope', '$log', '$rootScope', 'server', 'stateData'];
    /* @ngInject */
    function zipCodeController($scope, $log, $rootScope, server, stateData) {
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

	    	//$log.info('checing length', zipcode, zipcode.length);

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
		    
		    return new Promise(function(resolve, reject) {

			    server.cityStateLookup(zipcode).then(function(response) {
			    	$log.info('got this response', response);
			    	resolve(response);
			    }).catch(function(error) {
			    	$log.info('got this error', error);
			    	reject(error);
			    });

		    });
	    	
	    }

	    vm.validate = function(zipcode) {

	    	//$log.info('validating zip');

	    	//only validate if they've tried at least once
	    	if(vm.valStages.attempted) {

	    		//$log.info('cehcking length', longEnough(zipcode));

	    		//check if it's long enough
	    		if(longEnough(zipcode)) {

	    			//$log.info('good length, acting acordingly');
	    			//change the classes
	    			successifyInput();
	    			
	    			//get the city and state
	    			cityStateLookup(zipcode).then(function(response) {
	    				//when successfully aquired, update the model
	    				//$log.info(response);
	    				vm.cityName = response.zipCode.city;
	    				vm.stateId = response.zipCode.state;

	    				//after the values have been updated, apply the updates
	    				$rootScope.$apply();

	    			}).catch(function(error) {
	    				$log.info('there was an error');
	    			});

	    			//calculate shipping
	    			vm.calculateShipping()({start: '97005', end: vm.zip});

	    		} else {
	    			failifyInput();
	    		}

	    	}

	    }

	    vm.submit = function(zipcode) {

	    	vm.valStages.attempted = true;

	    	vm.validate(zipcode);
	    }

	}

	return  directive;
		
};