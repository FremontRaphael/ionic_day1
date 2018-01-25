angular.module('starter.services', [])

.factory('Member', function() {
    var membersJSON=[{"Name":"Jean","LastName":"Bon","Age":23,"Poste":"Professor","Online":0, "Image":"222img.jpg"},
    {"Name":"Alain","LastName":"De Loin","Age":26,"Poste":"Professor","Online":1, "Image":"333img.jpg"},
    {"Name":"Adam","LastName":"Andeve","Age":34,"Poste":"Professor","Online":0, "Image":"adam.jpg"},
    {"Name":"Kylo","LastName":"Ben","Age":25,"Poste":"student","Online":1, "Image":"ben.jpg"},
    {"Name":"Mike","LastName":"Not Tyson","Age":37,"Poste":"studen","Online":0, "Image":"mike.jpg"},
    {"Name":"Perry","LastName":"Allen","Age":31,"Poste":"student","Online":1, "Image":"perry.jpg"},
    {"Name":"Paul","LastName":"Dirlo","Age":42,"Poste":"Director","Online":1, "Image":"Boss.jpg"},
    {"Name":"Arioul","LastName":"Surprise","Age":19,"Poste":"Student","Online":0, "Image":"mavatar1.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":0, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":1, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":1, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":1, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":1, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":0, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":1, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":0, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":1, "Image":"mavatar2.jpg"},
    {"Name":"xxx","LastName":"yyyy","Age":24,"Poste":"Student","Online":0, "Image":"mavatar2.jpg"}];
  return {
    all: function() {
      return membersJSON;
    },
    get: function(name) {
      for (var i = 0; i < membersJSON.length; i++) {
        if (membersJSON[i].Name === name) {
          return membersJSON[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

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
