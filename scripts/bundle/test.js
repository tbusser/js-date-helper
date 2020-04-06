#!/usr/bin/env node

var jsDateHelper = require('./../../dist/index');

function test() {
	console.log('Is leap year: ', jsDateHelper.isLeapYear(new Date(2012, 0, 1)));
};

test();
