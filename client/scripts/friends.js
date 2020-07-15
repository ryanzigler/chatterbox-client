var Friends = {
  friendList: new Set(),

  toggleStatus: function(friend) {
    if (!Friends.currentFriend(friend)) {
      Friends.friendList.add(friend);
    } else {
      Friends.friendList.delete(friend);
    }
  },

  currentFriend: function(friend) {
    return Friends.friendsList.has(friend);
  }

};