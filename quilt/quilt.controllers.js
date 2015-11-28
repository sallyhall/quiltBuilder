(function() {
  'use strict';

  angular
    .module('quilt')
    .controller('QuiltController', function($scope, QuiltService, $routeParams){

      var loadFabrics = function(){
        QuiltService.getQuiltFabrics().success(function(fabrics){
          $scope.quiltFabrics = fabrics;
          console.log("fabrics: ",$scope.quiltFabrics);
        });
      };

      loadFabrics();

      $scope.removeQuiltFabric = function(fabric){
        QuiltService.removeQuiltFabric(fabric).success(function(){
          loadFabrics();
        });
      };

    });

}());
