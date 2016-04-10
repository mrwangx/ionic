angular.module('s.login', [])
  .factory('login',function($http){
    this.login2=function(user,callback)
    {
      var postData={userName:user.username,password:user.password};
      $http.post(dbconfig.basePath+dbconfig.login,postData,postFormat).success(function(data) {

        console.log(data);
        if(data.code==200){
          console.log(111111111111);
          callback(true) ;
        }
        else
        { console.log(222222);
          callback(false) ;
        }
      }).error(function(data){
        console.log(data);
        console.log(222222);
        callback(false) ;
      });
    };
    return{
      login:function(user,callback){
       /* if(user.username=='wx' && user.password=='wx')
        {
          return true;
        }
        else
        {
          return false;
        }*/
       /* var url = dbconfig.basePath+dbconfig.login,
          postData = {
            userName: user.username,
            password: user.password
          };
         /!* formatDate = function(data) {
            return $.param(data);
          },
          postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: formatDate
          };*!/

        $http.post(url, postData, postFormat)
          .success(function(){
            //window.location.href = "Gulugulus/subMenu";
            console.log('cgt');
          });*/


        /*$http.get(dbconfig.basePath+dbconfig.login).then(function(response) {
          console.log( response);

        });*/
        var postData={userName:user.username,password:user.password};
       return $http.post(dbconfig.basePath+dbconfig.login,postData,postFormat) .success(function(data) {

          console.log(data);
          if(data.code==200){
            //console.log(111111111111);
           // return true;
            callback(true) ;
          }
          else
          {// console.log(222222);
            //return false;
            callback(false) ;
          }
        }).error(function(data){
          //console.log(data);
          //console.log(222222);
          //return false;
         callback(false) ;
        });
        /*var postData={userName:user.username,password:user.password};
         $.ajax({
         url:dbconfig.basePath+dbconfig.login,
         method: 'get',
         data:{userName:user.username,password:user.password},
         dataType:'json',
         success:function(data){
         console.log(111111);
         console.log(data);
         },
         error:function(err){
         console.log(222222);
         }

         });*/
    /* $http.get('http://192.168.1.11/hlogin')
        .success(function(data){
          console.log(data);
          console.log(1111);
        }).error(function(err){
          console.log(err);
          console.log(2222);
        })*/



        }
    }

  });

