(function() {
  'use strict';

  angular
    .module('fabric')
    .controller('FabricController', function($scope, FabricService, QuiltService, $routeParams, _){
      var vm = this;
      QuiltService.getQuiltFabrics().success(function(fabrics){
        vm.quiltFabrics = fabrics;
      });
      vm.search = function(keyword){
        FabricService.searchSpoonflower(keyword).success(function(fabrics){
          vm.spoonflowerFabrics = fabrics.results[0].results;
        });
        FabricService.searchEtsy(keyword).success(function(fabrics){
          _.each(fabrics.results, function(fabric){
            fabric.image = fabric.MainImage.url_170x135;
          });
          vm.etsyFabrics = fabrics.results;
        });
        vm.keyword = "";
      }
      vm.searchEtsy = function (keyword) {
        FabricService.searchEtsy(keyword).success(function(fabrics){
          _.each(fabrics.results, function(fabric){
            fabric.image = fabric.MainImage.url_170x135;
          });
          vm.etsyFabrics = fabrics.results;
        });
        vm.keyword = "";
      };

      vm.searchSpoonflower = function(keyword){
        FabricService.searchSpoonflower(keyword).success(function(fabrics){
          vm.spoonflowerFabrics = fabrics.results[0].results;
        });
        vm.keyword = "";
      };

      vm.addSpoonflowerFabricToQuilt = function(fabric){
        var newFabric = {
          title: fabric.name,
          image: fabric.thumbnail_url,
          description: fabric.short_description,
          url: "http://www.spoonflower.com/fabric/"+fabric.id
        };
        FabricService.addFabricToQuilt(newFabric);
      };

      vm.addEtsyFabricToQuilt = function(fabric){
        var newFabric = {
          title: fabric.title,
          image: fabric.image,
          description: fabric.description,
          url: fabric.url
        };
        FabricService.addFabricToQuilt(newFabric);
      };
    });

}());
