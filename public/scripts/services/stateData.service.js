angular
    .module('trumpsNuts')
    .service('stateData', stateData);

stateData.$inject = ['$log'];

/* @ngInject */
function stateData($log) {
	var state = this;

	state.valStages = {
    	attempted: false,
    	successful: false,
    	failed: true
	};

	state.classes = {
		container: {
			'has-success': false,
			'has-warning': false,
			'has-danger': false,			
		},
		input: {
			'form-control-success': false,
			'form-control-warning': false,
			'form-control-danger': false
		}
	};

	state.styles = {
		container: {},
		input: {}
	};

	state.initValStages = function() {
		return state.valStages;
	}

	state.initClasses = function(section) {
		return state.classes[section];
	}

	state.initStyles = function(section) {
		return state.styles[section];
	}

	state.updateState = function(section, value) {
		var returnObject = state.classes[section];

		Object.keys(returnObject).forEach(function(key) {
			var resultArray = key.split('-');

			resultArray.forEach(function(word) {
				if(word == value) returnObject[key] = true;
				else returnObject[key] = false;
			});

			//if(key.contains(value)) returnObject[key] = true;
			//else returnObject[key] = false;
		});

		return returnObject;
	}

}	