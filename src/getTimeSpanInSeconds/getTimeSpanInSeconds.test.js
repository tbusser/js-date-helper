import { expect } from 'chai';
import getTimeSpanInSeconds from './getTimeSpanInSeconds.js';

const
	firstDate = new Date(2019, 0, 1, 0, 0, 1, 500),
	secondDate = new Date(2019, 0, 1, 0, 0, 3, 0),
	result = 1.5,
	roundedResult = 1;

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

	it('should return the difference between the input in seconds', () => {
		expect(getTimeSpanInSeconds(firstDate, secondDate)).to.equal(roundedResult);
		expect(getTimeSpanInSeconds(secondDate, firstDate)).to.equal(roundedResult);
	});

	it('should respect the provided options to shape the output', () => {
		expect(getTimeSpanInSeconds(firstDate, secondDate, { absolute: false })).to.equal(-roundedResult);
		expect(getTimeSpanInSeconds(secondDate, firstDate, { absolute: false })).to.equal(roundedResult);
		expect(getTimeSpanInSeconds(firstDate, secondDate, { rounded: false })).to.equal(result);
		expect(getTimeSpanInSeconds(secondDate, firstDate, { rounded: false })).to.equal(result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInSeconds(firstDate, secondDate, { absolute: false, rounded: false })).to.equal(-result);
		// eslint-disable-next-line object-property-newline
		expect(getTimeSpanInSeconds(secondDate, firstDate, { absolute: false, rounded: false })).to.equal(result);
	});
});
