'use strict';

angular.module('angularExperimentsApp')
    .controller('AnimationCtrl', function ($scope, CountriesService) {
        CountriesService.getCountries().then(function(countries) {
            $scope.countries = countries;
        })
    });


angular.module('angularExperimentsApp')
    .factory('CountriesService', function ($http, $q) {

        function getCountries() {
            var countries = $q.defer();
            $http.get('components/animation/countries.json')
                .success(function(data,status) {
                    countries.resolve(data);
                }
            )
            return countries.promise;
        }

        return {
            getCountries: getCountries
        }

    });