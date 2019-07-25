import { expect } from 'chai';
import getTimeSpanInHours from './getTimeSpanInHours.js';

const
	firstDate  = new Date(2019, 0, 1, 1, 0, 0, 0),
	secondDate = new Date(2019, 0, 1, 2, 30, 45, 0),
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

describe('getTimeSpanInHours', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => getTimeSpanInHours(firstDate, secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInHours(firstDate.getTime(), secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInHours(firstDate, secondDate.getTime())).to.not.throw(TypeError);
		expect(() => getTimeSpanInHours(firstDate.getTime(), secondDate.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => getTimeSpanInHours(null, secondDate)).to.throw(TypeError);
		expect(() => getTimeSpanInHours(firstDate, 'a')).to.throw(TypeError);
	});

	it('should return the time span as a float', () => {
		expect(getTimeSpanInHours(secondDate, firstDate, configNotRounded)).to.equal(1.5125);
		expect(getTimeSpanInHours(firstDate, secondDate, configNotRounded)).to.equal(1.5125);
	});

	it('should return the time span as an integer', () => {
		expect(getTimeSpanInHours(secondDate, firstDate, configRounded)).to.equal(1);
		expect(getTimeSpanInHours(firstDate, secondDate, configRounded)).to.equal(1);
		expect(getTimeSpanInHours(secondDate, firstDate, configRoundedNotAbsolute)).to.equal(1);
		expect(getTimeSpanInHours(firstDate, secondDate, configRoundedNotAbsolute)).to.equal(-1);
	});
});
