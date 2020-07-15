var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {
    console.log(MessagesView.$username);
    MessagesView.$username.on('click', '.username', function() {
      var username = event.currentTarget.textContent;
      Friends.toggleStatus(username);
    });
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