var abweddingapp = angular.module('abweddingApp', [
  'ngRoute',
  'abweddingControllers'
]);

abweddingapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
