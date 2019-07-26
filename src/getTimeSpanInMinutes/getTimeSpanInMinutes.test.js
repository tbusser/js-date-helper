import { expect } from 'chai';
import getTimeSpanInMinutes from './getTimeSpanInMinutes.js';

const
	firstDate = new Date(2019, 0, 1, 0, 1, 0, 0),
	secondDate = new Date(2019, 0, 1, 0, 2, 45, 0),
	result = 1.75,
	roundedResult = 1;

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

	it('should return the difference between the input in minutes', () => {
		expect(getTimeSpanInMinutes(firstDate, secondDate)).to.equal(roundedResult);
		expect(getTimeSpanInMinutes(secondDate, firstDate)).to.equal(roundedResult);
	});

	it('should respect the provided options to shape the output', () => {
		expect(getTimeSpanInMinutes(firstDate, secondDate, { absolute: false })).to.equal(-roundedResult);
		expect(getTimeSpanInMinutes(secondDate, firstDate, { absolute: false })).to.equal(roundedResult);
		expect(getTimeSpanInMinutes(firstDate, secondDate, { rounded: false })).to.equal(result);
		expect(getTimeSpanInMinutes(secondDate, firstDate, { rounded: false })).to.equal(result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInMinutes(firstDate, secondDate, { absolute: false, rounded: false })).to.equal(-result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInMinutes(secondDate, firstDate, { absolute: false, rounded: false })).to.equal(result);
	});
});
