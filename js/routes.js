(function () {

angular.module('menuApp')
.config(RoutesConfig);

////////////////////////////////////////////////////////////////
// ROUTES CONFIG
////////////////////////////////////////////////////////////////

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'viewStates/home.view.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'viewStates/categories.view.html'
    })

    .state('items', {
      url: '/items',
      templateUrl: 'viewStates/items.view.html'
    })

    ;
}


})();
