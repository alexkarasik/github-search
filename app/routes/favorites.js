import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return ['repo1', 'repo2', 'repo3'];
  }
});
