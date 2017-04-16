import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    mySearch() {
      this.sendAction('mySearch', this.get('search'));
    }
  }
});
