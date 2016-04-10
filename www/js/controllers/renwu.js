angular.module('c.renwu', [])
  .controller('rwList',function($scope,renwu){

    $scope.renwuList = renwu.list();
  })


  ;
