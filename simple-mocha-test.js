"use strict"

const  addon = require('bindings')('exampleAddon');
const assert = require("assert");

beforeEach(() => {
});

afterEach(() => {
});

describe('Meal API Test', function () {

  describe('API Existance', function() {
    it('addon.Meal is a function', function() {
      assert.equal(typeof addon.Meal, 'function');
    });

    it('new addon.Meal() returns an object ', function () {
      var x = new addon.Meal();
      assert.equal(typeof x, 'object');
      console.log(typeof x.isRawMeal);
      console.log(typeof x.size);
      console.log(x);
    });

    it('new addon.Meal() object has boolean attribute .isRawMeal', function () {
      var x = new addon.Meal();
      assert.equal(typeof x.isRawMeal, 'boolean');
    });

    it('new addon.Meal() object has number attribute .size', function () {
      var x = new addon.Meal();
      assert.equal(typeof x.size, 'number');

      x.size = 3.14;
      assert.equal(x.size, 3.14);
    });

    it('new addon.Meal() object has string attribute .type', function () {
      var x = new addon.Meal();
      assert.equal(typeof x.type, 'string');

      x.type = 'string-test-value';
      assert.equal(x.type, 'string-test-value');
    });

    it('new addon.Meal() object has a method .prepare()', function () {
      var x = new addon.Meal();
      assert.equal(typeof x.prepare, 'function');
    });

    it('new addon.Meal() object has a method .cook()', function () {
      var x = new addon.Meal();
      assert.equal(typeof x.cook, 'function');
    });
  });

});

