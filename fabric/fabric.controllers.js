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
        vm.searchSpoonflower(keyword);
        vm.searchEtsy(keyword);
        keyword = "";
      };

      vm.searchEtsy = function (keyword) {
        FabricService.searchEtsy(keyword).success(function(fabrics){
          _.each(fabrics.results, function(fabric){
            fabric.image = fabric.MainImage.url_170x135;
          });
          vm.etsyFabrics = fabrics.results;
          vm.etsyFabrics = _.filter(vm.etsyFabrics,function(fabric){
            return !FabricService.findInQuilt(fabric, vm.quiltFabrics);
          });
        });
        keyword = "";
      };

      vm.searchSpoonflower = function(keyword){
        FabricService.searchSpoonflower(keyword).success(function(fabrics){
          vm.spoonflowerFabrics = fabrics.results[0].results;
          _.each(vm.spoonflowerFabrics, function(fabric){
            fabric.image = fabric.thumbnail_url;
            fabric.title = fabric.name;
          });
          vm.spoonflowerFabrics = _.filter(vm.spoonflowerFabrics,function(fabric){
            return !FabricService.findInQuilt(fabric, vm.quiltFabrics)
          });
          keyword = "";
        });
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
