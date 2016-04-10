
angular.module('r.login', [])

.config(function($stateProvider, $urlRouterProvider) {


 $stateProvider

   .state('login', {
     url: '/login',
     templateUrl: 'view/login.html',
     controller:'signIn'
   })
   .state('relogin', {
     url: '/relogin',
    templateUrl: 'view/login.html',
     controller:'signIn'
   })

 ;

  //$urlRouterProvider.otherwise('/login');

});
