import { expect } from 'chai';
import getTimeSpanInMilliseconds from './getTimeSpanInMilliseconds.js';

const
	firstDate = new Date(2019, 0, 1),
	secondDate = new Date(2019, 1, 1),
	difference = 31 * 24 * 60 * 60 * 1000,
	thirdDate = new Date(2019, 0, 1, 0, 0, 0, 1);

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

	it('should return the difference between the dates in milliseconds as a positive number', () => {
		expect(getTimeSpanInMilliseconds(firstDate, secondDate)).to.equal(difference);
		expect(getTimeSpanInMilliseconds(secondDate, firstDate)).to.equal(difference);
		expect(getTimeSpanInMilliseconds(firstDate, thirdDate)).to.equal(1);
	});

	it('should return the difference between the dates as a negative when absolute is false', () => {
		expect(getTimeSpanInMilliseconds(firstDate, secondDate, { absolute: false })).to.equal(-difference);
		expect(getTimeSpanInMilliseconds(secondDate, firstDate, { absolute: false })).to.equal(difference);
	});
});
