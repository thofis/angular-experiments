'use strict';

angular.module('angularExperimentsApp', [
    'ngCookies',
    'ngResource',
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
    });

});
