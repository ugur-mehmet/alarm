Template.alarmItem.helpers({
    // background: function(){
    //   return Session.get('background');
    // },
    // color: function(){
    //   return Session.get('color');
    // },
    isSelected: function(){
      return Session.equals('selectedAlarm', this._id) ? "selected" : "nonselected";

    },
    status: function() {
    //  return Alarms.find({this._id})
    }

});
Template.alarmItem.events({
  "click": function(e, t){
      e.preventDefault();
      var alarm_id = this._id;
      console.log(alarm_id);
      Session.set('selectedAlarm', alarm_id)
      // Session.set('background','white');
      // Session.set('color', 'red');

  }
});
