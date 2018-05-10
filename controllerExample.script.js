//Controller information
'use strict';

angular.module('myApp', []);

.controller('FirstController', ['$scope',
  function($scope) {
    $scope.planets = [];

    $scope.addPlanet = function() {
      $scope.planets.push($scope.newplanet);
      $scope.newplanet = "";
    };
    $scope.selectAction = function() {
      $scope.selectedPlanet;
    };
  }
])

.filter('planetarySort', function(){
  return function(planets){
    var sortData = [];
    var order = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
    
    for (var sortedPlanet in order){
      if (planets.indexOf(order[sortedPlanet]) > -1) 
        sortData.push(order[sortedPlanet]);
    }
    
    return sortData;
  };
  
});
