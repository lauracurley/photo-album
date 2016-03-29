var InputView = Backbone.View.extend({

  tagName: 'form',

  className: 'save',

  events: {
    'submit': 'savePhoto'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  savePhoto: function(e) {
    var urlInput = $('#urlInput').val();
    var titleInput = $('#titleInput').val();
    this.collection.addPhotoEntry(urlInput, titleInput);
    console.log('urlInput', urlInput, 'titleInput', titleInput);
    // this.clearInput();
    this.resetInput();
    // this.render();
    e.preventDefault();
  },

  resetInput: function() {
    this.clearInput();
    var titleInput = 'Title: <input id="titleInput" placeholder="Enter an image title" name="inputTitle" type="text"></input>';
    var urlInput = 'Image Link: <input id="urlInput" placeholder="Enter image url" name="urlInput" type="text"></input>';
    var submit = '<input type="submit" value="submit"></input>';
    this.$el.append(titleInput + urlInput + submit);
  },

  clearInput: function() {
    this.$el.html('');
  }

});
