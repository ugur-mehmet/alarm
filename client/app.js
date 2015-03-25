Meteor.subscribe('alarms');
Meteor.subscribe('config');
Meteor.subscribe('logs');

Alarm = function (id, doc) {
  var alarm = {
  alarm_id: id,
  text: doc.text,
  place: doc.place,
  status: doc.status,
  mod_date: doc.moda_date
};
return alarm;
}
Meteor.startup(function () {
  localAlarms.remove({});
  Alarms.find().observeChanges({
    added: function(id,doc){
      var alarm = Alarms.findOne({_id:id});
      if (alarm.status === 'ADD') {
      localAlarms.insert(Alarm(id,doc));
      }
    },
    changed: function(id, doc){
      if(doc.status === 'CLR'){
        console.log(doc.status + 'Alarm cleared');
      }

    },
    removed: function(){

    }
  });

});
