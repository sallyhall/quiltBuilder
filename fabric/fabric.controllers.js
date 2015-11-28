(function() {
  'use strict';

  angular
    .module('fabric')
    .controller('FabricController', function($scope, FabricService, $routeParams, _){

      $scope.search = function(keyword){
        FabricService.searchSpoonflower(keyword).success(function(fabrics){
          $scope.spoonflowerFabrics = fabrics.results[0].results;
        });
        FabricService.searchEtsy(keyword).success(function(fabrics){
          _.each(fabrics.results, function(fabric){
            fabric.image = fabric.MainImage.url_170x135;
          });
          $scope.etsyFabrics = fabrics.results;
        });
      }
      $scope.searchEtsy = function (keyword) {
        FabricService.searchEtsy(keyword).success(function(fabrics){
          _.each(fabrics.results, function(fabric){
            fabric.image = fabric.MainImage.url_170x135;
          });
          $scope.etsyFabrics = fabrics.results;
        });
      };

      $scope.searchSpoonflower = function(keyword){
        FabricService.searchSpoonflower(keyword).success(function(fabrics){
          $scope.spoonflowerFabrics = fabrics.results[0].results;

        });
      };

      $scope.addSpoonflowerFabricToQuilt = function(fabric){
        var newFabric = {
          title: fabric.name,
          image: fabric.thumbnail_url,
          description: fabric.short_description
        };
        FabricService.addFabricToQuilt(newFabric);
      };

      $scope.addEtsyFabricToQuilt = function(fabric){
        var newFabric = {
          title: fabric.title,
          image: fabric.image,
          description: fabric.description
        };
        FabricService.addFabricToQuilt(newFabric);
      };
    });

}());
