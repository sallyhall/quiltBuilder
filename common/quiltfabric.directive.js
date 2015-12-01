(function () {
  "use strict";
  angular
    .module('quiltBuilder')
    .directive('quiltFabric', function() {
      return {
        restrict: 'E',
        templateUrl: 'common/views/quiltfabric.directive.html',
        scope: {
          fabric: '=',
          action: '&'
        },
        transclude: true,
        link: function(scope, elem, attrs) {
          elem.find("a").bind('click', function() {
           elem.css('display', 'none');
           });
         }
      };
    });

})();
