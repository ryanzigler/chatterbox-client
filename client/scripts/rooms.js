var Rooms = {
  // var list = some sort of temp storage for roomname
  list: new Set(),
  selectedRoom: '',
  add: function(roomname) {
    Rooms.list.add(roomname);
    Rooms.setSelectedRoom(roomname);
  },
  setSelectedRoom: function(roomname) {
    Rooms.selectedRoom = roomname;
    console.log(Rooms.selectedRoom);
  },

  get: function() {
    return [...Rooms.list.values()].sort();
  }

};