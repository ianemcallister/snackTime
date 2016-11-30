angular
    .module('trumpsNuts')
    .factory('dataModel', dataModel);

dataModel.$inject = ['$log'];

/* @ngInject */
function dataModel($log) {

	var dataModelObject = {
		name: {
			first: '',
			last: ''
		},
		email: '',
		shipping: {
			address: {
				street1: '',
				street2: '',
				street3: '',
				city: '',
				state: '',
				zip: ''
			}, 
			requirnments: {}
		},
		billing: {
			address: {
				street1: '',
				street2: '',
				street3: '',
				city: '',
				state: '',
				zip: ''
			},
			payment: {
				number: ['', '', '', ''],
				exp: ['', ''],
				csv: ''
			}
		},
		_read:_read,
		_update:_update,
		readProp:readProp,
		updateProp:updateProp
	};

	function _read(prop) {}
	function _update(prop, value) {}
	function readProp(prop) {}
	function updateProp(prop, value) {}

	return dataModelObject;
}