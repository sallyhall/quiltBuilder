(function() {
  'use strict';

  angular
    .module('quilt')
    .controller('QuiltController', function($scope, QuiltService, $routeParams){
      var vm = this;
      var loadFabrics = function(){
        QuiltService.getQuiltFabrics().success(function(fabrics){
          vm.quiltFabrics = fabrics;
          if($routeParams.fabricID){
            vm.fabric = QuiltService.getQuiltFabric(vm.quiltFabrics,$routeParams.fabricID);
          }
        });
      };

      loadFabrics();

      vm.removeQuiltFabric = function(fabric){
        QuiltService.removeQuiltFabric(fabric).success(function(){
          loadFabrics();
        });
      };

      vm.calculateYardage = function(fabric, height, width, num){
        fabric.yardage = QuiltService.calculateYardage(height, width, num);
        QuiltService.updateQuiltFabric(fabric);
        vm.width="";
        vm.height="";
        vm.num="";
      };

      vm.clearQuilt = function(){
        _.each(vm.quiltFabrics, function(fabric){
          vm.removeQuiltFabric(fabric);
        });
      };



    });

}());
