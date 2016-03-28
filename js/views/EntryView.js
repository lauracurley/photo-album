var EntryView = Backbone.View.extend({
  tagName: 'div',

  className: 'entry',

  template: _.template('<p><%= title %></p><div id="thumbnail" ><img src=<%= url %> /></div>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function() {

    var entry = this.template({
      title: this.model.get('title'),
      url: this.model.get('url'),
      rating: this.model.get('rating')
    });

    this.$el.html(entry);

  },

  clickAction: function() {

    this.model.toggleFeature.call(this.model, this);

  }

});
