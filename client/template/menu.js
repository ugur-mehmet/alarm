Template.menu.events({
  "click #alarms": function(e,t){
    $('#alarms').addClass('active');
    $('#config').removeClass('active');
    $('#logs').removeClass('active');

  },
  "click #config": function(e,t){
    $('#alarms').removeClass('active');
    $('#config').addClass('active');
    $('#logs').removeClass('active');

  },
  "click #logs": function(e,t){
    $('#alarms').removeClass('active');
    $('#config').removeClass('active');
    $('#logs').addClass('active');

  }
});
