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
    });
}



