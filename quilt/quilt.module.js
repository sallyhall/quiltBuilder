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
        controller: 'QuiltController'
      });
    });

    angular
      .module('underscore',[])
      .factory('_',function($window){
        return $window._;
      });

}());
