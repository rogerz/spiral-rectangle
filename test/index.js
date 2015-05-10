'use strict';

var chai = require('chaijs/chai');
var expect = chai.expect;

var lib = require('..');

describe('lib', function () {
	var spiral = lib(300, 150, 4);
	it('should create a function', function () {
		expect(spiral).to.be.a.function;
	});
});