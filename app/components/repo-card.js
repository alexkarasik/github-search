import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    favorite (){
      this.sendAction('favorite');
    }
  }

});
