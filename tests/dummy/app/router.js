import Router from 'ember-router';
import config from './config/environment';

let AppRouter = Router.extend({
  location: config.locationType
});

AppRouter.map(function() {
});

export default Router;
