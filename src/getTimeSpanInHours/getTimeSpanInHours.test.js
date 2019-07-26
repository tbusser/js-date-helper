import { expect } from 'chai';
import getTimeSpanInHours from './getTimeSpanInHours.js';

const
	firstDate  = new Date(2019, 0, 1, 1, 0, 0, 0),
	secondDate = new Date(2019, 0, 1, 2, 30, 45, 0),
	result = 1.5125,
	roundedResult = 1;

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

	it('should return the difference between the input in hours', () => {
		expect(getTimeSpanInHours(firstDate, secondDate)).to.equal(roundedResult);
		expect(getTimeSpanInHours(secondDate, firstDate)).to.equal(roundedResult);
	});

	it('should respect the provided options to shape the output', () => {
		expect(getTimeSpanInHours(firstDate, secondDate, { absolute: false })).to.equal(-roundedResult);
		expect(getTimeSpanInHours(secondDate, firstDate, { absolute: false })).to.equal(roundedResult);
		expect(getTimeSpanInHours(firstDate, secondDate, { rounded: false })).to.equal(result);
		expect(getTimeSpanInHours(secondDate, firstDate, { rounded: false })).to.equal(result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInHours(firstDate, secondDate, { absolute: false, rounded: false })).to.equal(-result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInHours(secondDate, firstDate, { absolute: false, rounded: false })).to.equal(result);
	});
});
