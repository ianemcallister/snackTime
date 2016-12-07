angular
    .module('trumpsNuts')
    .config(config);

/* @ngInject */
function config($routeProvider) {   
    $routeProvider
    //define the landing page
    .when('/', {
        templateUrl: 'views/landingPage.htm',
        controller: 'landingController',
        controllerAs: 'vm'
    })
    .when('/processing', {
        templateUrl: 'views/processing.htm',
        controller: 'processingController',
        controllerAs: 'vm'
    })
    .when('/confirmation', {
        templateUrl: 'views/confirmation.htm',
        controller: 'confirmationController',
        controllerAs: 'vm'
    });
}


