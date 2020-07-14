var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // initialize === user actions
  initialize: function() {
    //create room func

    // on roomsview button click click
    RoomsView.$button.click(function() {
      // var room prompt('enter a room name to create a room')
      var roomname = prompt('Enter a room name to create a new room');
      //rooms.add(room)
      Rooms.add(roomname);
      // roomsview.select.val(room)
      RoomsView.$select.val(roomname);
    });
    // select room func
    RoomsView.$select.click(function() {
      //roomsview select.change(function () {
      RoomsView.$select.change(function() {
        // Rooms. **setSelectedRoom_helper**(roomsView.$select.val());
        Rooms.setSelectedRoom(RoomsView.$select.val());
      });
    });
  },

  // render === server actions
  render: function(data) {
    // //Maybe populate the dropdown menu with the rooms here?
    // var $rooms = room.get()
    for (var i = 0; i < data.length; i++) {
      if (data[i].hasOwnProperty('roomname')) {
        Rooms.add(data[i].roomname);
      }
    }
    console.log(Rooms.get());
    //Rooms.get...
    // RoomsView.$select.append(roomname)
    var sortedRooms = Rooms.get();
    for (var i = 0; i < sortedRooms.length; i++) {
      roomsView.renderoom(sortedRooms[i]);
    }
  },

  renderRoom: function(roomname) {
    RoomsView.$select.append($('<option>').val(roomname).text(roomname));
  }
};



// var $option = $('<option>').val(sortedRooms[i]).text(sortedRooms[i])
//RoomsView.$select.append($option)