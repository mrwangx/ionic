// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('r.kaoqin', [])

.config(function($stateProvider, $urlRouterProvider) {


   $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      // Each tab has its own nav history stack:

      .state('tab.kq', {
        url: '/kq',
        views: {
          'tab-kq': {
            templateUrl: 'view/kaoqin/daka.html',
            controller: 'daka'
          }

        }
      })
      .state('tab.lxr', {
        url: '/lxr',
        views: {
          'tab-lxr': {
            templateUrl: 'view/lianxiren/lianxiren.html',
            controller: 'lxrList'
          }
        }
      });
});
