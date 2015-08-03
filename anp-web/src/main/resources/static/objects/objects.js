'use strict';

var app = angular.module('objectsApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ngTable'])
//  .config(function ($routeProvider, $locationProvider) {
//    $routeProvider
//      .when('/objects', {
//        templateUrl: '/objects/view/objects-main-view.html',
//        controller: 'ObjectsCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//
//        $locationProvider.html5Mode(true);
//  })
;




app.controller('ObjContr', function ($scope, $filter, ngTableParams, $resource, $timeout) {

    var api = $resource('/api/getObjects');

    $scope.rows = [
        {name: "Moroni", age: 50, role: 'Administrator', date: '00/00/01'},
        {name: "Tiancum", age: 43, role: 'Administrator', date: '00/00/01'},
        {name: "Jacob", age: 27, role: 'Administrator', date: '00/00/01'},
        {name: "Nephi", age: 29, role: 'Moderator', date: '00/00/01'},
        {name: "Enos", age: 34, role: 'User', date: '00/00/01'},
        {name: "Tiancum", age: 43, role: 'User', date: '00/00/01'},
        {name: "Jacob", age: 27, role: 'User', date: '00/00/01'},
        {name: "Nephi", age: 29, role: 'Moderator', date: '00/00/01'},
        {name: "Enos", age: 34, role: 'User', date: '00/00/01'},
        {name: "Tiancum", age: 43, role: 'Moderator', date: '00/00/01'},
        {name: "Jacob", age: 27, role: 'User', date: '00/00/01'},
        {name: "Nephi", age: 29, role: 'User', date: '00/00/01'},
        {name: "Enos", age: 34, role: 'Moderator', date: '00/00/01'},
        {name: "Tiancum", age: 43, role: 'User', date: '00/00/01'},
        {name: "Jacob", age: 27, role: 'User', date: '00/00/01'},
        {name: "Nephi", age: 29, role: 'User', date: '00/00/01'},
        {name: "Enos", age: 34, role: 'User', date: '00/00/01'},
        {name: "Micah", age: 29, role: 'Moderator', date: '00/00/01'},
        {name: "Viviane", age: 34, role: 'Moderator', date: '00/00/01'},
        {name: "Marconi", age: 43, role: 'User', date: '00/00/01'},
        {name: "Leonan", age: 27, role: 'Administrator', date: '00/00/02'},
        {name: "Arnaldo", age: 29, role: 'User', date: '00/00/02'},
        {name: "Zuleide", age: 34, role: 'Moderator', date: '00/00/02'}
    ];

    $scope.groupby = 'metro'; //Default order IF null get table without groups(not possible ?)

    //dinamic grouping
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 100          // count per page
    }, {
        groupBy: $scope.groupby,
        total:0
//            function () {
//            return $scope.rows.length;
//        }
        , // length of data
        getData: function ($defer, params) {
            api.query(params.url(), function(data)
            {
                       $timeout(function()
                       {
                           params.total(data.lenght);
                           $defer.resolve(data);
                       })
            }
            )
//            var orderedData = params.sorting() ?
//                $filter('orderBy')($scope.rows, $scope.tableParams.orderBy()) : $scope.rows;
//
//            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    $scope.$watch('groupby', function (value) {
        $scope.tableParams.settings().groupBy = value;
        console.log('Scope Value', $scope.groupby);
        console.log('Watch value', this.last);
        console.log('new table', $scope.tableParams);
        $scope.tableParams.reload();
    });
} );
