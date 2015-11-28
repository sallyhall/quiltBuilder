(function() {
  'use strict';

  angular
    .module('fabric')
    .factory('FabricService',function ($http, _) {

      var quiltUrl = "http://tiny-tiny.herokuapp.com/collections/quilt";
      var etsyUrl = "https://openapi.etsy.com/v2/segments/listings.js?api_key=eib9qc9hwzdss4dg26z6tpcb&path=craft-supplies.sewing-quilting-needle-crafts.fabric&keywords=";
      var spoonflowerUrl = function(searchTerm){
        return "https://api.spoonflower.com:443/design/search?q=" + searchTerm + "&sort=classic&limit=15&substrate=fabric&availability=for_sale"
      };

      var searchEtsy = function(keyword){
        return $http.get(etsyUrl + keyword);
      };

      var searchSpoonflower = function(keyword){
        return $http.get(spoonflowerUrl(keyword));
      }

      var addFabricToQuilt = function (fabric) {
        return $http.post(quiltUrl,fabric);
      }

      return{
        searchEtsy: searchEtsy,
        searchSpoonflower: searchSpoonflower,
        addFabricToQuilt: addFabricToQuilt
      };

    });

}());
