(function () {
  "use strict";
  angular
    .module('quiltBuilder')
    .directive('quiltFabric', function() {
      return {
        restrict: 'EA',
        templateUrl: 'common/views/fabric.directive.html',
        scope: {
          fabric: '=',
          action: '&'
        },
        transclude: true
      };
    });

})();
