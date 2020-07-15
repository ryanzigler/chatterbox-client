var Rooms = {
  // var list = some sort of temp storage for roomname
  list: new Set(),
  selectedRoom: 'lobby',

  // add a locally created room to list
  // set dropdown display to created room
  // run RoomsView
  get: function(data) {
    Rooms.list.add('lobby');
    for (var i = 0; i < data.length; i++) {
      if (data[i].hasOwnProperty('roomname')) {
        Rooms.list.add(data[i].roomname);
      }
    }
    return [...Rooms.list.values()].sort();
  },
  add: function(roomname) {
    Rooms.list.add(roomname);
    RoomsView.renderRoom(roomname);
    Rooms.setSelectedRoom(roomname);
  },
  setSelectedRoom: function(roomname) {
    Rooms.selectedRoom = roomname;
    console.log(Rooms.selectedRoom);
  },
  update: function() {
    // Messages.get().forEach((message) )
  }

};