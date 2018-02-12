import Controller from '@ember/controller';
import { get, computed } from '@ember/object';
import sha1 from 'sha1';

export default Controller.extend({
  string: '',
  hexSha1: computed('string', function() {
    return sha1(get(this, 'string'));
  })
});
