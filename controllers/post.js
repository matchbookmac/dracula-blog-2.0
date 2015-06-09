Blogger.PostController = Ember.ObjectController.extend({
  isEditing: false,
  action: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function(){
      this.set('isEditing', false);
    }
  }
});
