import Ember from 'ember';

export default Ember.Component.extend({
  fuckYou: 'Alex',
  actions: {
    favorite (){
      this.sendAction('favorite');
    }
  }

});
