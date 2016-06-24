import { assign } from 'ember-platform';
import run from 'ember-runloop';
import Application from '../fixtures/fanny-pack/app';
import config from '../../config/environment';

export default function startApp(attrs) {
  let application;

  let attributes = assign({}, config.APP);
  attributes = assign(attributes, attrs); // use defaults, but you can override;

  run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
