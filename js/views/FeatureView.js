var FeatureView = Backbone.View.extend({
  tagName: 'div',

  className: 'feature',

  template: _.template('<img class="feature" src="<%= url %>" />' + 
    '<div class="ratings"> <span><%= title %></span> <span id=".rating"><%= rating %></span>' + 
    '<span><select id="selectId"><option value=1>1</option>'+
    '<option value=2>2</option>' +
    '<option value=3>3</option>' +
    '<option value=4>4</option>' +
    '<option value=5>5</option>' +
    '</select></span> </div>'
    ),

  events: {
    "change #selectId": 'changeRating'
  },

  currentModel: undefined,

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'toggleFeature', function(self) {
      this.render(self);
    });
    this.listenTo(this.collection, 'change:selection', function(self) {
      this.render(self);
    });
    // this.model.on('toggleFeature', this.render, this);


  },

  render: function(self) {
    this.model = self;
    this.currentModel = self;
    var entry = this.template({
      title: this.model ? this.model.get('title') : 'Success!',
      url: this.model ? this.model.get('url') : 'img/success.jpeg',
      rating: this.model ? this.model.get('rating') : 'Rating: ' + 0
    });

    this.$el.empty();
    this.$el.append(entry);
    return this;

  },
  setFeature: function(feature) {
    this.model = feature;
    this.changeRating(self);
  },

  changeRating: function(self) {
    var rating = $('#selectId').val();
    console.log('model in changeRating', this.model, 'rating in changeRating', rating);

    //this.currentModel.changeRating.call(this.currentModel, this, rating);
  }



});
