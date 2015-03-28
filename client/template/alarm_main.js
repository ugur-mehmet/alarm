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
  }
});
