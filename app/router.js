import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('widgets');
  this.route('twitter' , {path:'/'});
  this.route('general-ui');
  this.route('comingsoon');
});

export default Router;
