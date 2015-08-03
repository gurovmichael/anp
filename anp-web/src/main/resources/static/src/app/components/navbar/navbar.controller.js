'use strict';

angular.module('app2')
    .controller('NavbarCtrl', function ($scope) {
        $scope.date = new Date();

        $scope.getClass = function (path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active"
            } else {
                return ""
            }
        }


    });
