Blogger.PostsRoute = Ember.Route.extend({

  model: function(){
    return this.store.find('post');
  }

});



  // controllerName: 'posts',
  // renderTemplate: function() {
  //   this.render('posts');
  // },
