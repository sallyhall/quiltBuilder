(function () {
  "use strict";
  angular
    .module('quiltBuilder')
    .directive('bananaCar', function() {
      return {
        restrict: 'E',
        template:"<h1>what the fuck</h1>",
        // templateUrl: 'common/views/fabric.directive.html',
        scope: {
          fabric: '=',
          action: '&'
        },
        transclude: true
      };
    });

})();

// (function () {
//   "use strict"; // <flickr-photo>
//   angular
//     .module('flickrgram')
//     .directive('flickrPhoto', function () {
//       return {
//         restrict: 'E',
//         templateUrl: 'common/views/flickrPhoto.directive.html',
//         scope: {
//           photo: '=',
//           action: '&'
//         },
//         transclude: true
//       };
//     });
//
// })();
