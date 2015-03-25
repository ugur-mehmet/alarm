Template.alarms.helpers({
  alarms: function(){
    return localAlarms.find({}, {sort:{mod_date:-1}});

  }

});
