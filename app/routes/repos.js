import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model: function() {
    let url = 'https://api.github.com/';
    return Ember.$.getJSON(url).then(function(data) {
      return data;
    });
  },
  actions: {

  }
});
