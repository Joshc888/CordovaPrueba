"use strict";angular.module("pruebaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("pruebaApp").controller("MainCtrl",["$scope","$http",function(a,b){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.prueba="prueba",b.get("http://10.0.7.121/GuanajovenWeb/public/api/convocatorias").then(function(b){a.datos=b.data})}]),angular.module("pruebaApp").run(["$templateCache",function(a){a.put("views/main.html",'<div ng-controller="MainCtrl"> <div ng-repeat="convocatoria in datos.data"> <ol class="breadcrumb"> <li><a href="#">Convocatoria #{{convocatoria.id_convocatoria}}</a></li> </ol> <div class="row"> <div class="col-sm-3"> <ul class="list-group"> <li class="list-group-item">Título</li> <li class="list-group-item">Descripción</li> <li class="list-group-item">Imagen</li> </ul> </div> <div class="col-sm-9"> <ul class="list-group"> <li class="list-group-item">{{convocatoria.titulo}}</li> <li class="list-group-item">{{convocatoria.descripcion}}</li> <li class="list-group-item"> {{convocatoria.ruta_imagen}}  </li> </ul> </div> </div> </div> </div>')}]);