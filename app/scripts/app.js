'use strict';

angular.module('angularExperimentsApp', [
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngAnimate'
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

    $stateProvider.state("animation", {
        url: '/animation',
        templateUrl: "components/animation/animation.html",
        controller: 'AnimationCtrl',
        resolve: {
            country: function() {
                return null;
            }
        }
    });

    $stateProvider.state("animationDetails", {
        url: "/animation/:country",
        templateUrl: "components/animation/animation.html",
        controller: 'AnimationCtrl',
        resolve: {
            country: function ($stateParams) {
                return $stateParams.country;
            }
        }
    });

});
