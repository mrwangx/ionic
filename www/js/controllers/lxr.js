angular.module('c.lxr', [])
  .controller('lxrList',function($scope,lxr){
    $scope.lxrList = lxr.list();
  })


  ;
