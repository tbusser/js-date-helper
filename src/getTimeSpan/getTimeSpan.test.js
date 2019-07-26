import { expect } from 'chai';
import getTimeSpan from './getTimeSpan.js';
import getTimeSpanInDays from '../getTimeSpanInDays/getTimeSpanInDays.js';
import getTimeSpanInMilliseconds from '../getTimeSpanInMilliseconds/getTimeSpanInMilliseconds.js';

const
	firstDate = new Date(2019, 0, 1),
	secondDate = new Date(2019, 0, 15, 12, 30, 45, 500);

describe('getTimeSpan', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => getTimeSpan(firstDate, secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpan(firstDate.getTime(), secondDate)).to.not.throw(TypeError);
		expect(() => getTimeSpan(firstDate, secondDate.getTime())).to.not.throw(TypeError);
		expect(() => getTimeSpan(firstDate.getTime(), secondDate.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => getTimeSpan(null, secondDate)).to.throw(TypeError);
		expect(() => getTimeSpan(firstDate, 'a')).to.throw(TypeError);
	});

	it('should return a time span for the provided dates', () => {
		const result = getTimeSpan(firstDate, secondDate);

		expect(result.days).to.equal(14);
		expect(result.hours).to.equal(12);
		expect(result.minutes).to.equal(30);
		expect(result.seconds).to.equal(45);
		expect(result.milliseconds).to.equal(500);
	});

	it('should respect the provided options to shape the output', () => {
		const result = getTimeSpan(firstDate, secondDate, { absolute: false });

		expect(result.days).to.equal(-14);
		expect(result.hours).to.equal(-12);
		expect(result.minutes).to.equal(-30);
		expect(result.seconds).to.equal(-45);
		expect(result.milliseconds).to.equal(-500);
	});
});
