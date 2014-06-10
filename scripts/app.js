'use strict';

/**
 * @ngdoc overview
 * @name kickStartApp
 * @description
 * # kickStartApp
 *
 * Main module of the application.
 */
var kickStartApp = angular.module('kickStartApp', ['ngRoute','ngGrid']);

kickStartApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'views/main.html', controller: 'MainCtrl'});  
  $routeProvider.when('/view2', {templateUrl: 'views/mainng.html', controller: 'MainCtrl'});  
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
