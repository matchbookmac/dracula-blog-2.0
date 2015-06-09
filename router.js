Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});   // refers to created path
  this.resource('about');
  this.resource('contact', function() {
    this.resource('email');   //nested route
    this.resource('phone');
  });
  this.resource('recent-comments');
  this.resource('post', {path: 'posts/:post_id'}, function () {
    this.resource('new-comment');
  }) // refers to the path of specific post
  this.resource('new-post', {path: 'posts/new'})
});
