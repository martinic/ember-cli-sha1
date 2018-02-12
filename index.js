/* eslint-env node */
'use strict';

var path = require('path');
var stew = require('broccoli-stew');

module.exports = {
  name: 'ember-cli-sha1',

  treeForVendor: function() {
    var sifter = stew.find(path.dirname(require.resolve('js-sha1')), {
      destDir: 'js-sha1',
      files: ['sha1.js']
    });

    return stew.find([
      sifter
    ]);
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/js-sha1/sha1.js', {
      using: [
        { transformation: 'amd', as: 'sha1' }
      ]
    });
  }
};
