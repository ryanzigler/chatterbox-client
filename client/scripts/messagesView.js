var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //Display initial messages (get all messages from array of object)
  },

  render: function() {
    var data = Messages.messageList;
    $('#chats').empty();
    var html = '';
    for (var i = 0; i < data.length; i++) {
      if (Rooms.selectedRoom === 'lobby' || (data[i].hasOwnProperty('roomname') && data[i].roomname === Rooms.selectedRoom)) {
        data[i].username = data[i].username || '';
        data[i].text = data[i].text || '';
        html += MessageView.render(data[i]);
      }
    }
    $('#chats').append(html);
  },

  renderMessage: function(message) {
    if (!message.hasOwnProperty('updatedAt')) {
      message.updatedAt = '';
      var $message = MessageView.render(message);
      MessagesView.$chats.prepend($message);
    }
  }

};