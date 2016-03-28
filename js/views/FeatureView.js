var FeatureView = Backbone.View.extend({
  tagName: 'div',

  className: 'feature',

  template: _.template('<img class="feature" src="<%= url %>" /><div class="ratings"> <span><%= title %></span> <span id=".rating"><%= rating %></span> </div>'),

  // events: {
  //   'click': 'clickAction'
  // },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'toggleFeature', function(which) {
      this.render(which);
    });
    // this.model.on('toggleFeature', this.render, this);


  },

  render: function(which) {
    console.log('model in feature: ', which);
    this.model = which;
    var entry = this.template({
      title: this.model ? this.model.get('title') : 'Success!',
      url: this.model ? this.model.get('url') : 'img/success.jpeg',
      rating: this.model ? this.model.get('rating') : 'Rating: ' + 0
    });

    this.$el.empty();
    this.$el.append(entry);

    return this;

  }

});
