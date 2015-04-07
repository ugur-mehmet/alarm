Template.alarms.helpers({
  alarms: function(){
    return localAlarms.find({}, {sort:{mod_date:-1}});

  }

});
Template.alarms.events({
  "click .btn-ack": function(e, t){
      e.preventDefault();
      status = localAlarms.findOne(Session.get('selectedAlarm')).status;
      //alert(Session.get('selectedAlarm') + status);
      if(status === 'CLR'){
        localAlarms.remove(Session.get('selectedAlarm'));
      }
      // if(status === 'ADD'){
      //   $(".selected").attr('style', 'background-color: black; color: yellow;');
      //
      //
      // }
      if(status === 'ADD'){
        // Session.set('ack',Session.get('selectedAlarm'));
        localAlarms.update(Session.get('selectedAlarm'), {$set: {ack:'yes'}});
      }
  }
});
