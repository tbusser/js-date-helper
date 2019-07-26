import { expect } from 'chai';
import getTimeSpanInCalendarDays from './getTimeSpanInCalendarDays.js';

const
	firstDate  = new Date(2019, 0, 1, 23, 59, 59, 999),
	secondDate = new Date(2019, 0, 2,  0,  0, 0, 1),
	result = 1;

describe('getTimeSpanInCalendarDays', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => getTimeSpanInCalendarDays(firstDate, secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInCalendarDays(firstDate.getTime(), secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInCalendarDays(firstDate, secondDate.getTime())).to.not.throw(TypeError);
		expect(() => getTimeSpanInCalendarDays(firstDate.getTime(), secondDate.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => getTimeSpanInCalendarDays(null, secondDate)).to.throw(TypeError);
		expect(() => getTimeSpanInCalendarDays(firstDate, 'a')).to.throw(TypeError);
	});

	it('should return the difference between the input in calendar days', () => {
		expect(getTimeSpanInCalendarDays(firstDate, secondDate)).to.equal(result);
		expect(getTimeSpanInCalendarDays(secondDate, firstDate)).to.equal(result);
	});

	it('should respect the provided options to shape the output', () => {
		expect(getTimeSpanInCalendarDays(firstDate, secondDate, { absolute: false })).to.equal(-result);
		expect(getTimeSpanInCalendarDays(secondDate, firstDate, { absolute: false })).to.equal(result);
		expect(getTimeSpanInCalendarDays(firstDate, secondDate, { rounded: false })).to.equal(result);
		expect(getTimeSpanInCalendarDays(secondDate, firstDate, { rounded: false })).to.equal(result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInCalendarDays(firstDate, secondDate, { absolute: false, rounded: false })).to.equal(-result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInCalendarDays(secondDate, firstDate, { absolute: false, rounded: false })).to.equal(result);
	});
});
