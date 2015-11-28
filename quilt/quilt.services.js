(function() {
  'use strict';

  angular
    .module('quilt')
    .factory('QuiltService',function ($http, _) {

      var url = "http://tiny-tiny.herokuapp.com/collections/quilt";

      var getQuiltFabrics = function(){
        return $http.get(url);
      };

      var getQuiltFabric = function(fabrics, fabricID){
        return _.where(fabric,{_id:fabricID})[0];
      };

      var removeQuiltFabric = function(fabric){
        return $http.delete(url + "/" + fabric._id);
      };



      return{
        getQuiltFabrics: getQuiltFabrics,
        getQuiltFabric: getQuiltFabric,
        removeQuiltFabric: removeQuiltFabric
      };

    });

}());
