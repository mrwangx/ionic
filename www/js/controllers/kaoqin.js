angular.module('c.kaoqin', [])
  .controller('daka',function($scope,$ionicPopup,$rootScope,$window){


    //$scope.daka=signIn.
    $scope.daka=function(){
      $rootScope.dkbtn=true;
      console.log('daka11111111111');
      var alertPopup =$ionicPopup.alert({
          title: '提示信息',
          template: '打卡成功'
        });

        alertPopup.then(function(res) {
          console.log('按了确定：'+res);
          $rootScope.dkbtn=false;
          //加载其他入口方式
          //$window.location.href='index.html';
        });

      //$rootScope.dkbtn=false;
    };

  })

  .controller('DashCtrl', function($scope) {})

  .controller('ChatsCtrl', function($scope, Chats) {

  /*  $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };*/
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
   // $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
   /* $scope.settings = {
      enableFriends: true
    };*/
  });
