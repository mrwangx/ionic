
angular.module('r.renwu', [])

.config(function($stateProvider, $urlRouterProvider) {



    $stateProvider

      // setup an abstract state for the tabs directive
      .state('renwu', {
        url: '/renwu',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('renwu.list', {
        url: '/list',
        views: {
          'renwu-list': {
            templateUrl: 'view/renwu/renwulb.html',
            controller: 'rwList'
          }
        }
      })

      .state('renwu.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-list': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      });



});
