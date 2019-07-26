import { expect } from 'chai';
import getTimeSpanInMilliseconds from './getTimeSpanInMilliseconds.js';

const
	firstDate = new Date(2019, 0, 1),
	secondDate = new Date(2019, 1, 1, 0, 0, 0, 1),
	result = (31 * 24 * 60 * 60 * 1000) + 1;

describe('getTimeSpanInMilliseconds', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => getTimeSpanInMilliseconds(firstDate, secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInMilliseconds(firstDate.getTime(), secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpanInMilliseconds(firstDate, secondDate.getTime())).to.not.throw(TypeError);
		expect(() => getTimeSpanInMilliseconds(firstDate.getTime(), secondDate.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => getTimeSpanInMilliseconds(null, secondDate)).to.throw(TypeError);
		expect(() => getTimeSpanInMilliseconds(firstDate, 'a')).to.throw(TypeError);
	});

	it('should return the difference between the input in milliseconds', () => {
		expect(getTimeSpanInMilliseconds(firstDate, secondDate)).to.equal(result);
		expect(getTimeSpanInMilliseconds(secondDate, firstDate)).to.equal(result);
	});

	it('should respect the provided options to shape the output', () => {
		expect(getTimeSpanInMilliseconds(firstDate, secondDate, { absolute: false })).to.equal(-result);
		expect(getTimeSpanInMilliseconds(secondDate, firstDate, { absolute: false })).to.equal(result);
		expect(getTimeSpanInMilliseconds(firstDate, secondDate, { rounded: false })).to.equal(result);
		expect(getTimeSpanInMilliseconds(secondDate, firstDate, { rounded: false })).to.equal(result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInMilliseconds(firstDate, secondDate, { absolute: false, rounded: false })).to.equal(-result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInMilliseconds(secondDate, firstDate, { absolute: false, rounded: false })).to.equal(result);
	});
});
