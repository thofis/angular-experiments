'use strict';

angular.module('angularExperimentsApp')
    .controller('AnimationCtrl', function ($scope, CountriesService, country) {

        CountriesService.getCountries().then(function(countries) {
            $scope.countries = countries;
        })

        $scope.isCountryListHidden = false;
        $scope.isCountryDetailsHidden = country ? false : true;
        $scope.currentCountry = country;

        $scope.hideCountryList = function() {
            $scope.isCountryListHidden = true;
        }

        $scope.showCountryList = function () {
            $scope.isCountryListHidden = false;
        }


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