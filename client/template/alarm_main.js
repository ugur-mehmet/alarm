Template.alarms.helpers({
  alarms: function(){
    return Alarms.find({}, {sort:{mod_date:-1}});

  }
});
