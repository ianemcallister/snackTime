angular
    .module('trumpsNuts')
    .factory('state', state);

state.$inject = ['$log'];

/* @ngInject */
function state($log) {

	var stateObject = {
		classes: {
			'form-group': false,
			'has-success': false,
			'has-warning': false,
			'has-danger': false,
			'form-control-label': false,
			'form-control': false,
			'form-control-success': false,
			'form-control-warning': false,
			'form-control-danger': false,
			'form-control-feedback': false,
			'form-text': false,
			'text-muted': false
		},
		style: {

		}
	}

	return stateObject;
}