var ngApp = angular.module("ngApp", ['ui.bootstrap']);

ngApp.controller('myController',  function($scope, $http){

  $http.get('sheet.json').success(function (data){
    $scope.xList = data;

  });


  $scope.viewby = 10;
  $scope.totalItems = 88;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; //reset to first page
}


        



});