import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  // model: function(params) {
  //     return this.get('store').findAll('search', params);
  // },
  actions: {
    mySearch(search) {
      this.get('ajax').request(`searches/${search}`)
      .then((data) =>{
        console.log(data);
        return this.transitionTo('repos', data);
      });
 },
 }
});
