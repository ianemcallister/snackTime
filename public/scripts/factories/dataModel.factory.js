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
		copyShippingAddress: true,
		product: {
			price: 2000
		},
		order: {
			qty: 1,
			cost: {
				subtotal: 2000,
				tax: 0,
				discounts: {
					promotions: [],
					totalValue: 0
				},
				total: 0
			}
		},
		shipping: {
			address: {
				street1: '',
				street2: '',
				street3: '',
				city: '',
				state: '',
				zip: ''
			}, 
			requirnments: {
				isPriority: 'true',
				dataAquired: false,
				priority: {
					transitDays: 0,
					cost: {
						amount: 0,
						currency: 'USD'
					}
				},
				express: {
					transitDays: 0,
					cost: {
						amount: 0,
						currency: 'USD'
					}
				}
			},
			cost: {
				amount: 645,
				currency: 'USD'
			}
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
		apis: {
			squareId: ''
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