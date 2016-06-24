import Route from 'ember-route';
import injectService from 'ember-service/inject';
import { readOnly } from 'ember-computed';

export default Route.extend({
  fastboot: injectService(),
  shoebox: readOnly('fastboot.shoebox'),

  model() {
    let fastboot = this.get('fastboot');
    let shoebox = this.get('shoebox');

    if (!fastboot.get('isFastBoot')) {
      return {
        key1: shoebox.retrieve('key1'),
        key2: shoebox.retrieve('key2')
      };
    }
  }
});
