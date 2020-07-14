var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //Display initial messages (get all messages from array of object)
  },

  render: function(data) {
    //Update messages after message is submitted
    //console.log(data);
    var html = '';
    //console.log(MessagesView.$chats.html(''));
    console.log(data[0]);
    for (var i = 0; i < data.length; i++) {
      data[i].username = data[i].username || '';
      data[i].text = data[i].text || '';
      html += MessageView.render(data[i]);
    }
    console.log(html);
    $('#chats').append(html);
  }

};