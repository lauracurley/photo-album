var PhotoEntry = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentFeature', new PhotoEntry());

    params.library.on('play', function(song) {
      this.set('currentSong', song);
      console.dir(this);
    }, this);

  }
});





  // toggleFeature: function() {
  //   // when a photo entry view is clicked, set the feature photo
  //   this.trigger('toggleFeature', this);
  // },

  // changeRating: function(self, rating) {
  //   console.log(rating);
  //   this.model.set('rating', rating);
  //   this.trigger('changeRating', this);
  // }

  // // this.set('currentFeature', new EntryView() );

  //   // this.model.on('change: selection', function(model) {
  //   //   this.feature.setFeature(model);
  //   // }, this);
