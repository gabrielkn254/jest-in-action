const { describe, test } = require('node:test');
const assert = require('node:assert');
const isOfAge = require('../age');
// const test = require('node:test');

describe('isOfAge function', () => {

  test('numbers above 21', () => {
    assert.strictEqual(isOfAge(23), true)
  });

});