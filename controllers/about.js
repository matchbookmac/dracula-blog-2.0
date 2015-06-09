Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function() {
      alert('Vlad the Empaler');    //does an action
    },
    showPicture: function() {
      this.set('isPictureShowing', true);   //much like jquery .click function. 
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
  }

});
