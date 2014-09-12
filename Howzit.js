if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
    var ig = Meteor.npmRequire('instagram-node').instagram();
    
    // ig.use({ access_token: })
    ig.use({ client_id: 'd48e6ebe1fe04d3e939a7b1695704b38',
              client_secret: 'fbeee657bba24321a7a7ae59d54f6acd'});
    ig.user('18435149', function(err, result, remaining, limit) {
      console.log(result);
    });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
