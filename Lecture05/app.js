// (function() {
//   'use strict';
//
//   angular.module('DIApp', [])
//     .controller('DIController', DIController);
//
//   DIController.$inject = ['$scope','$filter']
//   function DIController($scope, $filter) {
//     $scope.name = "Yaakov";
//
//     $scope.upper = function() {
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     };
//   }
//
//   function AnnonateMe(name, job, blah){
//     return "Blah!";
//   }
//
//   console.log(AnnonateMe.toString());
//
// })();
!function(){"use strict";function a(a,b){a.name="Yaakov",a.upper=function(){var c=b("uppercase");a.name=c(a.name)}}function b(a,b,c){return"Blah!"}angular.module("DIApp",[]).controller("DIController",a),a.$inject=["$scope","$filter"],console.log(b.toString())}();
