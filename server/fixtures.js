
if (Alarms.find().count()===0){
  Alarms.insert({
    //alarm_id: 1,
    text: 'Elektrik kesintisi var',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

  Alarms.insert({
    //alarm_id: 2,
    text: 'Jenerator-1 Calisiyor',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

  Alarms.insert({
    //alarm_id: 3,
    text: 'Jenerator-1 Arizali',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });
  Alarms.insert({
    //alarm_id: 4,
    text: 'Jenerator-2 Calisiyor',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

  Alarms.insert({
    //alarm_id: 5,
    text: 'Jenerator-2 Arizali',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

  Alarms.insert({
    //alarm_id: 6,
    text: 'Giris Kapisi Acik',
    place: 'Seddulbahir',
    status: 'CLR',
    mod_date: new Date()
  });

}
