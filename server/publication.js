Meteor.publish('alarms', function() {
  return Alarms.find();
});

Meteor.publish('config', function(){
  return Config.find();

});

Meteor.publish('logs', function(){
  return Logs.find();
});
