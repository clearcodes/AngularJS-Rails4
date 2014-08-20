var app = angular.module("myNoteApp", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/', {
          templateUrl: 'products.html',
          controller: 'personController'
      }).
      when('/products/:productId', {
          templateUrl: 'product-list.html',
          controller: 'personDetailsController'
      }).
      when('/weather',{
          templateUrl: 'weather.html',
          controller: 'weatherController'
      }).
      when('/capex',{
          templateUrl: 'capex.html',
          controller: 'capexController'
      }).
      otherwise({
          redirectTo: '/'
      });
  } ]);