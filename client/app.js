Meteor.subscribe('alarms');
Meteor.subscribe('config');
Meteor.subscribe('logs');

Meteor.startup(function () {
  localAlarms.remove({});
  Alarms.find().observeChanges({

    added: function(id,doc){
      if (doc.status === 'ADD') {
        doc.alarm_id = id;
        localAlarms.insert(doc);
        //Logs.insert(doc);
      }
    },
    changed: function(id, doc){

      if(doc.status === 'CLR'){

        var localalarm = localAlarms.findOne({alarm_id: id, status: 'ADD'});
        var logalarm = Alarms.findOne(id);
        delete logalarm._id;
        logalarm.alarm_id = id;
        if(localalarm) {
          localAlarms.update(localalarm._id, {$set: doc});
          Logs.insert(logalarm);

        }

      }

      if(doc.status === 'ADD'){
        var newdoc = Alarms.findOne(id);
        delete newdoc._id;
        newdoc.alarm_id = id;
        localAlarms.insert(newdoc);
        Logs.insert(newdoc);
      }


    },

    removed: function(){

    }
  });

});
