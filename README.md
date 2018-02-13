# ember-cli-sha1

[![Greenkeeper badge](https://badges.greenkeeper.io/martinic/ember-cli-sha1.svg)](https://greenkeeper.io/)

A simple SHA1 hash function that supports UTF-8 encoding.

## Installation

* `ember install ember-cli-sha1`

## Usage

controller
```JavaScript
import Controller from '@ember/controller';
import { get, computed } from '@ember/object';
import sha1 from 'sha1';

export default Controller.extend({
  string: '',
  hexSha1: computed('string', function() {
    return sha1(get(this, 'string'));
  })
});
```

template
```Handlebars
<p>{{input type="text" value=string placeholder="UTF8 String"}}</p>
<p>{{hexSha1}}</p>
```

## Update hash

You could use it like this:
```JavaScript
sha1('Message to hash');
var hash = sha1.create();
hash.update('Message to hash');
hash.hex();
```

## Example
```JavaScript
sha1(''); // da39a3ee5e6b4b0d3255bfef95601890afd80709
sha1('The quick brown fox jumps over the lazy dog'); // 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12
sha1('The quick brown fox jumps over the lazy dog.'); // 408d94384216f890ff7a0c3528e8bed1e0b01621

// It also supports UTF-8 encoding
sha1('中文'); // 7be2d2d20c106eee0836c9bc2b939890a78e8fb3

// It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
sha1([]); // da39a3ee5e6b4b0d3255bfef95601890afd80709
sha1(new Uint8Array([])); // da39a3ee5e6b4b0d3255bfef95601890afd80709

// Different output
sha1(''); // da39a3ee5e6b4b0d3255bfef95601890afd80709
sha1.hex(''); // da39a3ee5e6b4b0d3255bfef95601890afd80709
sha1.array(''); // [218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]
sha1.digest(''); // [218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]
sha1.arrayBuffer(''); // ArrayBuffer
```

## Running the Dummy App

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
