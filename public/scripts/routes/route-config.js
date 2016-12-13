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
    .when('/confirmation', {
        templateUrl: 'views/confirmation.htm',
        controller: 'confirmationController',
        controllerAs: 'vm'
    });
}

function getAuthId(server) {
    return new Promise(function(resolve, reject) {
        server.getSqrAppId().then(function(response) {
            resolve(response.id);
        }).catch(function(error) {
            reject(error);
        });
    })
}
