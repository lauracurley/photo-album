var TitleView = Backbone.View.extend({

  el: '<h1>',

  initialize: function() {
    this.render();
  },

  render: function() {
    
    this.$el.text('Motivation Roulette');
    return this;
  }

});
