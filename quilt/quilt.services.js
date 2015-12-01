(function() {
  'use strict';

  angular
    .module('quilt')
    .factory('QuiltService',function ($http, _) {

      var url = "http://quilt-builder.herokuapp.com/collections/quilt";

      var getQuiltFabrics = function(){
        return $http.get(url);
      };

      var getQuiltFabric = function(fabrics, fabricID){
        return _.where(fabrics,{_id:fabricID})[0];
      };

      var removeQuiltFabric = function(fabric){
        return $http.delete(url + "/" + fabric._id);
      };


      var updateQuiltFabric = function(fabric){
        return $http.put(url + "/" + fabric._id, fabric);
      };

      var calculateYardage = function(height, width, num){
        var squaresPerRow = Math.floor(42/width);
        var rows = Math.floor(num/squaresPerRow)+1;
        var length = rows*height;
        var yards = Math.floor(length/36*10)/10;
        return yards;
      };



      return{
        getQuiltFabrics: getQuiltFabrics,
        getQuiltFabric: getQuiltFabric,
        removeQuiltFabric: removeQuiltFabric,
        calculateYardage: calculateYardage,
        updateQuiltFabric: updateQuiltFabric
      };

    });

}());
