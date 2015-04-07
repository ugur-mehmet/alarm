Alarms = new Mongo.Collection('alarms');

Meteor.methods({

  removeAllAlarms: function(){
    Alarms.remove({});
  }
});

Alarms.allow({
  update: function(){
    return true;
  },
  insert: function(){
    return true;
  },
  remove: function(){
    return true;
  }

});
