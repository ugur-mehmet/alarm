Meteor.subscribe('alarms');
Meteor.subscribe('config');
Meteor.subscribe('logs');

Meteor.startup(function () {
  localAlarms.remove({});
  Alarms.find().observeChanges({

    added: function(id,doc){
      //var alarm = Alarms.findOne({_id:id});
      if (doc.status === 'ADD') {
      doc.alarm_id = id;
      localAlarms.insert(doc);
      }
    },
    changed: function(id, doc){

      if(doc.status === 'CLR'){
        var localalarm = localAlarms.findOne({alarm_id: id, status: 'ADD'})
        if(localalarm) {

          localAlarms.update({alarm_id: id}, {$set: doc});
          console.log(doc.alarm_id + doc.text + 'cleared');
        }

      }

      if(doc.status === 'ADD'){
        doc.alarm_id = id;
        localAlarms.insert(doc);
      }


    },

    removed: function(){

    }
  });

});
