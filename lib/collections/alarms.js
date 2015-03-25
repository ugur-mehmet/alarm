Alarms = new Mongo.Collection('alarms');

Meteor.methods({

  removeAllAlarms: function(){
    Alarms.remove({});
  }
});
