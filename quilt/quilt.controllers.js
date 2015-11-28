(function() {
  'use strict';

  angular
    .module('quilt')
    .controller('QuiltController', function($scope, QuiltService, $routeParams){

      var loadFabrics = function(){
        QuiltService.getQuiltFabrics().success(function(fabrics){
          $scope.quiltFabrics = fabrics;
          if($routeParams.fabricID){
            console.log("fabricID",$routeParams.fabricID);
            $scope.fabric = QuiltService.getQuiltFabric($scope.quiltFabrics,$routeParams.fabricID);
          }
        });
      };

      loadFabrics();

      $scope.removeQuiltFabric = function(fabric){
        QuiltService.removeQuiltFabric(fabric).success(function(){
          loadFabrics();
        });
      };

      $scope.calculateYardage = function(fabric, height, width, num){
        fabric.yardage = QuiltService.calculateYardage(height, width, num);
        QuiltService.updateQuiltFabric(fabric);
      };

      $scope.clearQuilt = function(){
        _.each($scope.quiltFabrics, function(fabric){
          $scope.removeQuiltFabric(fabric);
        });
      };



    });

}());
