'use strict';

/**
 * @ngdoc function
 * @name pruebaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebaApp
 */
angular.module('pruebaApp')
  .controller('MainCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.prueba = "prueba";
    
    $http.get('http://10.0.7.121/GuanajovenWeb/public/api/convocatorias').then(function(response){
        $scope.datos = response.data;
    })
    
  });
