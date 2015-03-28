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
      }
    },
    changed: function(id, doc){

      if(doc.status === 'CLR'){

        var localalarm = localAlarms.findOne({alarm_id: id, status: 'ADD'});

        if(localalarm) {
          localAlarms.update(localalarm._id, {$set: doc});

        }

      }

      if(doc.status === 'ADD'){
        var newdoc = Alarms.findOne(id);
        delete newdoc._id;
        newdoc.alarm_id = id;
        localAlarms.insert(newdoc);
      }


    },

    removed: function(){

    }
  });

});
