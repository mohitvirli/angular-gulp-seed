'use strict';

app.config(['$stateProvider','$locationProvider', '$httpProvider','$urlRouterProvider',
    function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
        $stateProvider
            .state('sample1',{
                url:'/sample1',
                templateUrl:'../views/sample1.html',
                controller: 'SampleControllerOne',
            })
            .state('sample2',{
                url:'/sample2',
                templateUrl:'../views/sample2.html',
                controller: 'SampleControllerTwo',
            });

        $urlRouterProvider
            .otherwise('/');

        //For hiding '#' from URLs use the below
        // $locationProvider.html5Mode(true);
    }
]);

