angular.module('app', ['ngAnimate'])

.controller('FormCtrl', ['$scope', '$animate', '$http', '$location', function($scope, $animate, $http, $location) {

  // hide error messages until 'submit' event
  $scope.submitted = false;

  // hide success message
  $scope.showMessage = false;

  // method called from shakeThat directive
  $scope.submit = function() {

    //$http.post('/login', {username:$scope.credentials.username, password: $scope.credentials.password}, {
    //  headers : {
    //    "content-type" : "application/x-www-form-urlencoded"
    //  }
    //}).


        $http({
          method: 'POST',
          url: '/login',
          params: $scope.credentials
          ,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
  }).success(function(data, status) {

      $location='/';
      //$location.path("/");
      $scope.error = false;

    }).error(function(data) {
      $location.path("/login");
      $scope.error = true;
      $rootScope.authenticated = false;
    });

    // show success message
    $scope.showMessage = true;
  };

}])

.directive('shakeThat', ['$animate', function($animate) {

  return {
    require: '^form',
    scope: {
      submit: '&',
      submitted: '='
    },
    link: function(scope, element, attrs, form) {

      // listen on submit event
      element.on('submit', function() {

        // tell angular to update scope
        scope.$apply(function() {

          // everything ok -> call submit fn from controller
          if (form.$valid) return scope.submit();

          // show error messages on submit
          scope.submitted = true;

          // shake that form
          $animate.addClass(element, 'shake', function() {
            $animate.removeClass(element, 'shake');
          });

        });

      });

    }
  };

}]);
