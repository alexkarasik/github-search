import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    let url = 'https://api.github.com/';
    return Ember.$.getJSON(url).then(function(data){
      return data;
    });
  },
  save(repo) {
    console.log('repos route');
    repo.save();
  }

});
