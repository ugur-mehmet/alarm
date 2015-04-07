Session.setDefault('ack','');
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
    alarmStatus: function() {
      if(this.status=='ADD'){
        console.log(this.status);
        return 'add';
      }
      else{
        console.log(this.status);
        return 'clr';
      }

    },
    mod_date: function(){
      return moment(this.mod_date).format("ddd MMM DD YYYY hh:mm:ss");
    }


    // ack: function() {
    //   return Session.equals('ack', this._id) ? "ack" : "";
    // }


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
