(function () {
  "use strict";
  angular
    .module('quiltBuilder')
    .directive('quiltFabric', function() {
      return {
        restrict: 'EA',
        templateUrl: 'common/views/quiltfabric.directive.html',
        scope: {
          fabric: '=',
          action: '&'
        },
        transclude: true
      };
    });

})();
