angular.module('c.login', [])

.controller('signIn',function($scope,  $location,$ionicPopup,login) {
    $scope.signIn=function(user)
    {

      login.login(user,function(tf){
        console.log('login:'+tf);
        if(tf)
        {
          $location.url('/tab/kq');
        }
        else
        {
          $ionicPopup.alert({
            title: '登录失败',
            template: '用户名或密码错误'
          });
          user.username="";
          user.password="";
        }
      });





    };

  }
);



