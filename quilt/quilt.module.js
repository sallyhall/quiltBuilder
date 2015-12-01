(function() {
  'use strict';

  angular
    .module('quilt',[
      'ngRoute',
      'underscore',
  ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/quilt',{
        templateUrl:'quilt/views/list.html',
        controller: 'QuiltController as quiltCtrl'
      })
      .when('/quilt/shoppingList',{
        templateUrl: 'quilt/views/shoppingList.html',
        controller: 'QuiltController as quiltCtrl'
      })
      .when('/quilt/:fabricID',{
        templateUrl: 'quilt/views/detail.html',
        controller: 'QuiltController as quiltCtrl'
      });
    });

    angular
      .module('underscore',[])
      .factory('_',function($window){
        return $window._;
      });

}());
