angular.module('whatsapp.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
  {
    name: 'Jesús Conde',
picture: 'https://pbs.twimg.com/profile_images/1001601612/005_bigger.jpg'
  },
  {
    name: 'Hub Spot',
picture: 'https://pbs.twimg.com/profile_images/626105757004492800/CdxLMoHH_400x400.png'
  },
  {
     name: 'Lisa Collins',
picture: 'https://pbs.twimg.com/profile_images/587606033222082561/c53Lkbrz.jpg'
  },
  {
    name: 'Ivo Spigel',
picture: 'https://pbs.twimg.com/profile_images/572380074209316864/mlzFGcN8.jpeg'
  },
  {
   name: 'Loly Daskall',
picture: 'https://pbs.twimg.com/profile_images/127105431/Lolly2_400x400.jpg'
}
];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
