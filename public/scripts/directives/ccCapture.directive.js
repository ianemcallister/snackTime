/* ToolBar.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div tool-bar></div>
*/

angular
	.module('trumpsNuts')
	.directive('ccCapture', ccCapture);

/* @ngInject */
function ccCapture() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/ccCapture.directive.htm',
		replace: true,
		scope: {
			productCosts: '=',
			shippingCosts: '=',
			isProcessing: '=',
			customerName: '=',
			zip: '=',
			stateId: '=',
			cityName: '='
		},
		link: linkFunc,
		controller: ccCaptureController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ccCaptureController.$inject = ['$scope', '$log', '$location', 'server'];
    /* @ngInject */
    function ccCaptureController($scope, $log, $location, server) {
	    var vm = this;

	    vm.data = { card:{} };

	    //view model methods
	    vm.submitForm = function() {
			//$log.info('submitting', vm.data);
			vm.isProcessing = true;
			vm.paymentForm.requestCardNonce();
			return false;
		}

		vm.chargeCardWithNonce = function(nonce) {
			
			var url = "/charges/charge_card";
			
			var data = {
				nonce: nonce,
				product_id: 1123,//$scope.data.product_id,
				name: vm.customerName, //'John Smith', //$scope.data.user.name,
				//email: $scope.data.user.email,         
				street_address_1: '1234 Main Street', //$scope.data.user.street_address_1,
				street_address_2: '', //$scope.data.user.street_address_2,
				city: vm.cityName, //$scope.data.user.city,
				state: vm.stateId, //$scope.data.user.state,
				zip: vm.zip //$scope.data.user.zip
			};

			server.chargeCard(url, data).then(function(response) {
				$log.info('response', response);
				$location.path('/confirmation');
				$scope.$apply();
			}).catch(function(error) {
				$log.info('error', error);
			})

			/*$http.post(url, data).success(function(data, status) {
				if (data.status == 400){
				  // display server side card processing errors 
				  $scope.isPaymentSuccess = false;
				  $scope.card_errors = []
				  for (var i =0; i < data.errors.length; i++){
				    $scope.card_errors.push({message: data.errors[i].detail})
				  }
				}else if (data.status == 200) {
				  $scope.isPaymentSuccess = true;
				}
				$scope.isProcessing = false;
			}).error(function(){
				$scope.isPaymentSuccess = false;
				$scope.isProcessing = false;
				$scope.card_errors = [{message: "Processing error, please try again!"}];
			})*/
		}
		
		//local methods
	    var init = function() {

	    	server.getSqrAppId().then(function(response) {
				
				vm.paymentForm = new SqPaymentForm({
				    applicationId: response.id,
				    inputClass: 'sq-input',
				    inputStyles: [
				      {
				        fontSize: '14px',
		            	padding: '7px 12px',
		            	backgroundColor: "transparent"
				      }
				    ],
				    cardNumber: {
				      elementId: 'sq-card-number',
				      placeholder: '•••• •••• •••• ••••'
				    },
				    cvv: {
				      elementId: 'sq-cvv',
				      placeholder: 'CVV'
				    },
				    expirationDate: {
				      elementId: 'sq-expiration-date',
				      placeholder: 'MM/YY'
				    },
				    postalCode: {
				      elementId: 'sq-postal-code'
				    },
				    callbacks: {

				      // Called when the SqPaymentForm completes a request to generate a card
				      // nonce, even if the request failed because of an error.
				      cardNonceResponseReceived: function(errors, nonce, cardData) {
				        if (errors) {
				          $log.info("Encountered errors:", errors);
				          vm.card_errors = errors;
		            	  vm.isProcessing = false;
		            	  $scope.$apply(); // required since this is not an angular function

				        // No errors occurred. Extract the card nonce.
				        } else {
				          vm.card_errors = [];
				          // Delete this line and uncomment the lines below when you're ready
				          // to start submitting nonces to your server.
				          //alert('Nonce received: ' + nonce);

				          vm.chargeCardWithNonce(nonce);

				          /*
				            These lines assign the generated card nonce to a hidden input
				            field, then submit that field to your server.
				            Uncomment them when you're ready to test out submitting nonces.

				            You'll also need to set the action attribute of the form element
				            at the bottom of this sample, to correspond to the URL you want to
				            submit the nonce to.
				          */
				          // document.getElementById('card-nonce').value = nonce;
				          // document.getElementById('nonce-form').submit();

				        }
				      },

				      unsupportedBrowserDetected: function() {
				        // Fill in this callback to alert buyers when their browser is not supported.
				      },

				      // Fill in these cases to respond to various events that can occur while a
				      // buyer is using the payment form.
				      inputEventReceived: function(inputEvent) {
				        switch (inputEvent.eventType) {
				          case 'focusClassAdded':
				            // Handle as desired
				            break;
				          case 'focusClassRemoved':
				            // Handle as desired
				            break;
				          case 'errorClassAdded':
				            // Handle as desired
				            break;
				          case 'errorClassRemoved':
				            // Handle as desired
				            break;
				          case 'cardBrandChanged':
				            // Handle as desired
				            break;
				          case 'postalCodeChanged':
				            // Handle as desired
				            break;
				        }
				      },

				      paymentFormLoaded: function() {
				        // Fill in this callback to perform actions after the payment form is
				        // done loading (such as setting the postal code field programmatically).
				        // paymentForm.setPostalCode('94103');
				      }
				    }
				});
		    	vm.paymentForm.build();
	    	}).catch(function(error) {
	    		$log.info(error);
	    	});
	    	
	    }

	    init();
	}

	return  directive;
		
};