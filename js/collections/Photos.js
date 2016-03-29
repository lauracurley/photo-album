var Photos = Backbone.Collection.extend({

  model: PhotoEntry,

  addPhotoEntry: function(urlInput, titleInput) {
    this.add({
      title: titleInput,
      url: 'file:///Users/Laura/hr41/photo-album' +'/img/' + urlInput,
      rating: 0
    });
  }

});
