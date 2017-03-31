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
    favorite(links) {
      this.get('ajax').request(`/bookmarked_repos`, {
        method: 'POST',
        data: {
          links: {
            title: "${links.title}",
            language: "${links.language}",
            score: "${links.score}",
            forks: "${links.forks}",
            description: "${links.description}"
          }
        }
      });
      return this.transitionTo('favorites');
    }
  }
});
