'use strict';

/**
 * @ngdoc function
 * @name kickStartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kickStartApp
 */
angular.module('kickStartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {no:1,title:'HTML5 Boilerplate'},
      {no:2,title:'Angular JS'},
      {no:3,title:'Karma'},
	  {no:4,title:'Yeoman'},
	  {no:5,title:'Grunt'},
	  {no:6,title:'Bower'},
	  {no:7,title:'Bootstrap'},
	  {no:8,title:'Notepad++'},
	  {no:9,title:'Windows'},
	  {no:10,title:'Chrome'},
	  {no:11,title:'PhantomJS'},
	  {no:12,title:'Protractor'},
	  {no:13,title:'GIT'},
	  {no:14,title:'Firefox'},
	  {no:15,title:'MVC'}
    ];
  });
