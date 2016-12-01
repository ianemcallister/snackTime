angular
    .module('trumpsNuts')
    .factory('stateFactory', stateFactory);

stateFactory.$inject = ['$log'];

/* @ngInject */
function stateFactory($log) {

	var stateObject = {
		model: {
			allElementsCompleted: false,
			fields: [],
			input: {
				prop: {
					name: '',
					requirnments: []
				},
				state: {
					addressed: false,
					success: false,
					failure: false
				}
			}
		},
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
		styles: {

		},
		changeState: {
			inputSuccess: '',
			inputFailed: ''
		}
	}

	function inputSuccess() {}
	function inputFailed() {}

	return stateObject;
}