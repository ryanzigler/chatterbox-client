var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log($('#message').val());

    // var message = {};
    // //message['username'] = $(#)
    // message['username'] = 'anon'; //CHANGE ME
    // message['text'] = $('#message').val();
    // message['roomname'] = 'lobby'; //CHANGE ME
    var message = Messages(App.username, $('#message').val(), 'lobby');
    Parse.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};