Logs = new Mongo.Collection('logs');

Logs.allow({
  insert: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.methods({
  removeLogs: function(){
    Logs.remove({});
  }
});
