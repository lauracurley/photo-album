var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.title = new TitleView();

    this.input = new InputView({
      collection: this.collection
    });

    this.list = new ListView({
      collection: this.collection
    });

    this.feature = new FeatureView({
      collection: this.collection
    });

    
    this.render();
  },

  render: function() {

    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.list.$el,
      this.feature.$el
    ]);

    return this;
  }

});
