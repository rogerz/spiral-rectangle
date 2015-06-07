'use strict';

var chai = require('chai');
var expect = chai.expect;

var lib = require('..');

describe('lib', function () {
	var spiral = lib(300, 300, 5);
	it('should create a function', function () {
		expect(spiral).to.be.a.function;
	});
  it('should general spiral', function () {
    var coords = [];
    for (var i = 0; i < 10; i++) {
      coords.push(spiral());
    }
    expect(coords).eql([
      [5, 0],
      [5, 5],
      [0, 5],
      [-5, 5],
      [-5, 0],
      [-5, -5],
      [0, -5],
      [5, -5],
      [10, -5],
      [10, 0]
    ]);
  });
  it('should reset', function () {
    spiral(true);
    expect(spiral()).eql([5, 0]);
  });
});