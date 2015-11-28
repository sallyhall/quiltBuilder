(function() {
  'use strict';

  angular
    .module('quilt')
    .controller('QuiltController', function($scope, QuiltService, $routeParams){

      var loadFabrics = function(){
        QuiltService.getQuiltFabrics().success(function(fabrics){
          $scope.fabrics = fabrics;
        });
      };

      loadFabrics();

      var removeQuiltFabric = function(fabric){
        QuiltService.removeQuiltFabric(fabric);
        loadFabrics();
      };
    });

}());
