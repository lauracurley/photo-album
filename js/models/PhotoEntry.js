var PhotoEntry = Backbone.Model.extend({

  defaults: {
    title: 'Success!',
    url: '../img/success.jpeg',
    rating: 0
  },

  initialize: function() {},

  toggleFeature: function() {
    // when a photo entry view is clicked, set the feature photo
    console.log(this);
    this.trigger('toggleFeature', this);
  },

  changeRating: function(rating) {
    this.set('rating') = rating;
  }

});
    // var isImperial = this.get('unit') === '°F';

    // if (isImperial) {
    //   var celsius = (this.get('weather') - 32) * (5 / 9);
    //   this.set({
    //     'unit': '°C',
    //     'weather': celsius.toFixed(2)
    //   });
    // }
    // else {
    //   var fahrenheit = (this.get('weather') / (5 / 9)) + 32;
    //   this.set({
    //     'unit': '°F',
    //     'weather': fahrenheit.toFixed(2)
    //   });
    // }
