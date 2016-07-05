var marziApp = angular.module('marziApp', ['ngRoute']);

marziApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/initpage', {
    templateUrl: 'initpage.html'
  })
  .when('/home', {
    templateUrl: 'home.html'
  }).otherwise({
    redirectTo: '/initpage'
  });
}]);

marziApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http({method: 'GET', url: '../galleryData.json'}).success(function(data)
  {
    $scope.galleryItems = data;
  });

  var pContainerHeight = $('.group1').height();

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if (wScroll <= pContainerHeight) {

      $('.window-and-wall').css({
        'transform' : 'translate(0px, '+ wScroll /20 +'%)'
      });

      $('.blue-sky').css({
        'transform' : 'translate(0px, '+ wScroll /20 +'%)'
      });

      $('.bird-and-tree').css({
        'transform' : 'translate(0px, '+ wScroll /2 +'%)'
      });

      $('.film-canvas').css({
        'transform' : 'translate(0px, '+ wScroll /80 +'%)'
      });


    }
  });
}]);


marziApp.directive('rotatet', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var rotateDegrees = 1;
          var loop = $timeout(function rotateImg() {
            var r = 'rotate(' + rotateDegrees + 'deg)';
            element.css({
                '-moz-transform': r,
                '-webkit-transform': r,
                '-o-transform': r,
                '-ms-transform': r
            });
            rotateDegrees++;
            loop = $timeout(rotateImg, 50);
          },50);
        }
    }
}]);
