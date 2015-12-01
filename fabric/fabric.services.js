(function() {
  'use strict';

  angular
    .module('fabric')
    .factory('FabricService',function ($http, _) {

      var quiltUrl = "http://tiny-tiny.herokuapp.com/collections/quilt";
      var etsyUrl = function(searchTerm){
        return "https://openapi.etsy.com/v2/listings/active.js?includes=MainImage&api_key=eib9qc9hwzdss4dg26z6tpcb&category=Supplies/Fabric/Yardage&keywords="
                + searchTerm
                + "&callback=JSON_CALLBACK";
      }
      var spoonflowerUrl = function(searchTerm){
        return "https://api.spoonflower.com:443/design/search?q=" + searchTerm + "&sort=classic&limit=15&substrate=fabric&availability=for_sale"
      };

      var searchEtsy = function(keyword){
        return $http.jsonp(etsyUrl(keyword));
      };

      var searchSpoonflower = function(keyword){
        return $http.get(spoonflowerUrl(keyword));
      };

      var addFabricToQuilt = function (fabric) {
        $http.get(quiltUrl).success(function(fabrics){
          if (_.where(fabrics, {url:fabric.url}).length===0){
            return $http.post(quiltUrl,fabric);
          }
        });
      };

      return{
        searchEtsy: searchEtsy,
        searchSpoonflower: searchSpoonflower,
        addFabricToQuilt: addFabricToQuilt
      };

    });

}());
