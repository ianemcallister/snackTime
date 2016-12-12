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
		scope: {},
		link: linkFunc,
		controller: ccCaptureController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    ccCaptureController.$inject = ['$scope', '$log'];
    /* @ngInject */
    function ccCaptureController($scope, $log) {
	    var vm = this;

	    var applicationId = 'sandbox-sq0idp-yGc6DrklfJNBsc4MQ5fDDw';

	    vm.paymentForm = new SqPaymentForm({
		    applicationId: applicationId,
		    inputClass: 'sq-input',
		    inputStyles: [
		      {
		        fontSize: '15px'
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
		          console.log("Encountered errors:");

		          // This logs all errors encountered during nonce generation to the
		          // Javascript console.
		          errors.forEach(function(error) {
		            console.log('  ' + error.message);
		          });

		        // No errors occurred. Extract the card nonce.
		        } else {

		          // Delete this line and uncomment the lines below when you're ready
		          // to start submitting nonces to your server.
		          alert('Nonce received: ' + nonce);


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
		
	    var init = function() {
	    	vm.paymentForm.build();
	    }

	    init();
	}

	return  directive;
		
};