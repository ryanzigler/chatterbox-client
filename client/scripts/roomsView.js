var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // initialize === user actions
  initialize: function() {
    //create room func

    // on roomsview button click
    RoomsView.$button.click(function() {
      var roomname = prompt('Enter a room name to create a new room');
      if (roomname !== null) {
        Rooms.add(roomname);
        RoomsView.$select.val(roomname);
      }
    });
    // select room func
    RoomsView.$select.click(function() {
      RoomsView.$select.change(function() {
        Rooms.setSelectedRoom(RoomsView.$select.val());
        //here, call a function in messagesView that only shows messages in the newly selected room
        MessagesView.render();
      });
    });
  },

  // render === server actions
  render: function(data) {
    var $rooms = Rooms.get(data);
    console.log($rooms);
    for (var i = 0; i < $rooms.length; i++) {
      RoomsView.renderRoom($rooms[i]);
    }
  },

  renderRoom: function(roomname) {
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  }
};



// var $option = $('<option>').val(sortedRooms[i]).text(sortedRooms[i])
//RoomsView.$select.append($option)