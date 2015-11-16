angular
  .module('whatsapp')
  .config(config);

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('inicio', {
      url: '/inicio',
      templateUrl: 'templates/inicio.html',
      controller: 'InicioCtrl'
    })

    .state('listado', {
      url: '/listado',
      templateUrl: 'templates/lista.html',
      controller: 'ListaCtrl'
    })

    .state('dormir', {
      url: '/dormir',
      templateUrl: 'templates/dormir.html',
      controller: 'DormirCtrl'
    })

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/inicio');
}