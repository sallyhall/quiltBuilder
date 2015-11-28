(function() {
  'use strict';

  angular
    .module('fabric')
    .controller('FabricController', function($scope, FabricService, $routeParams, _){

      $scope.searchEtsy = function (keyword) {
        FabricService.searchEtsy(keyword).success(function(fabrics){
          $scope.etsyFabrics = fabrics;
        });
      };

      $scope.searchSpoonflower = function(keyword){
        FabricService.searchSpoonflower(keyword).success(function(fabrics){
          $scope.spoonflowerFabrics = fabrics.results[0].results;
          _.each($scope.spoonflowerFabrics, function(fabric){
            console.log("name: ", fabric.name);
          });
        });
      };

      $scope.addFabricToQuilt = function(fabric){
        FabricService.addFabricToQuilt(fabric);
      }
    });

}());
