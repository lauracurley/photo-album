var Photos = Backbone.Collection.extend({

  model: PhotoEntry,



  addPhotoEntry: function(url) {

    // $.get(
    //   'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=5c680e5d8c8f29befb9f1c239dfae90b',
    //   function(data) {

    //     this.add({
    //         zipcode: zipcode,
    //         city: data.name,
    //         weather: data.main.temp.toFixed(2)
    //       });

    //   }.bind(this)
    // );

  }

});

// Photos.fetch().then(function(){
//   alert(Photos[0]);
// });
