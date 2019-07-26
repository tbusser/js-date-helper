import { expect } from 'chai';
import getTimeSpanInDays from './getTimeSpanInDays.js';

const
	firstDate  = new Date(2019, 0, 1,  0, 0, 0, 0),
	secondDate = new Date(2019, 0, 2, 12, 0, 0, 0),
	result = 1.5,
	roundedResult = 1;

describe('getTimeSpanInDays', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => getTimeSpanInDays(firstDate, secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInDays(firstDate.getTime(), secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInDays(firstDate, secondDate.getTime())).to.not.throw(TypeError);
		expect(() => getTimeSpanInDays(firstDate.getTime(), secondDate.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => getTimeSpanInDays(null, secondDate)).to.throw(TypeError);
		expect(() => getTimeSpanInDays(firstDate, 'a')).to.throw(TypeError);
	});

	it('should return the difference between the input in days', () => {
		expect(getTimeSpanInDays(firstDate, secondDate)).to.equal(roundedResult);
		expect(getTimeSpanInDays(secondDate, firstDate)).to.equal(roundedResult);
	});

	it('should respect the provided options to shape the output', () => {
		expect(getTimeSpanInDays(firstDate, secondDate, { absolute: false })).to.equal(-roundedResult);
		expect(getTimeSpanInDays(secondDate, firstDate, { absolute: false })).to.equal(roundedResult);
		expect(getTimeSpanInDays(firstDate, secondDate, { rounded: false })).to.equal(result);
		expect(getTimeSpanInDays(secondDate, firstDate, { rounded: false })).to.equal(result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInDays(firstDate, secondDate, { absolute: false, rounded: false })).to.equal(-result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInDays(secondDate, firstDate, { absolute: false, rounded: false })).to.equal(result);
	});
});
