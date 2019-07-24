import { expect } from 'chai';
import getTimeSpanInSeconds from './getTimeSpanInSeconds.js';

const
	firstDate = new Date(2019, 0, 1, 0, 0, 1, 500),
	secondDate = new Date(2019, 0, 1, 0, 0, 3, 0),
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

describe('getTimeSpanInSeconds', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => getTimeSpanInSeconds(firstDate, secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInSeconds(firstDate.getTime(), secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInSeconds(firstDate, secondDate.getTime())).to.not.throw(TypeError);
		expect(() => getTimeSpanInSeconds(firstDate.getTime(), secondDate.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => getTimeSpanInSeconds(null, secondDate)).to.throw(TypeError);
		expect(() => getTimeSpanInSeconds(firstDate, 'a')).to.throw(TypeError);
	});

	it('should return the time span as a float', () => {
		expect(getTimeSpanInSeconds(secondDate, firstDate, configNotRounded)).to.equal(1.5);
		expect(getTimeSpanInSeconds(firstDate, secondDate, configNotRounded)).to.equal(1.5);
	});

	it('should return the time span as an integer', () => {
		expect(getTimeSpanInSeconds(secondDate, firstDate, configRounded)).to.equal(1);
		expect(getTimeSpanInSeconds(firstDate, secondDate, configRounded)).to.equal(1);
		expect(getTimeSpanInSeconds(secondDate, firstDate, configRoundedNotAbsolute)).to.equal(1);
		expect(getTimeSpanInSeconds(firstDate, secondDate, configRoundedNotAbsolute)).to.equal(-1);
	});
});
