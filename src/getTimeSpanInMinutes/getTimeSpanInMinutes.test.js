import { expect } from 'chai';
import getTimeSpanInMinutes from './getTimeSpanInMinutes.js';

const
	firstDate = new Date(2019, 0, 1, 0, 1, 0, 0),
	secondDate = new Date(2019, 0, 1, 0, 2, 45, 0),
	configNotRounded = {
		rounded: false
	},
	configRoundedNotAbsolute = {
		absolute: false,
		rounded: true
	},
	configRounded = {
		rounded: true
	};

describe('getTimeSpanInMinutes', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => getTimeSpanInMinutes(firstDate, secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInMinutes(firstDate.getTime(), secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInMinutes(firstDate, secondDate.getTime())).to.not.throw(TypeError);
		expect(() => getTimeSpanInMinutes(firstDate.getTime(), secondDate.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => getTimeSpanInMinutes(null, secondDate)).to.throw(TypeError);
		expect(() => getTimeSpanInMinutes(firstDate, 'a')).to.throw(TypeError);
	});

	it('should return the time span as a float', () => {
		expect(getTimeSpanInMinutes(secondDate, firstDate, configNotRounded)).to.equal(1.75);
		expect(getTimeSpanInMinutes(firstDate, secondDate, configNotRounded)).to.equal(1.75);
	});

	it('should return the time span as an integer', () => {
		expect(getTimeSpanInMinutes(secondDate, firstDate, configRounded)).to.equal(1);
		expect(getTimeSpanInMinutes(firstDate, secondDate, configRounded)).to.equal(1);
		expect(getTimeSpanInMinutes(secondDate, firstDate, configRoundedNotAbsolute)).to.equal(1);
		expect(getTimeSpanInMinutes(firstDate, secondDate, configRoundedNotAbsolute)).to.equal(-1);
	});
});
