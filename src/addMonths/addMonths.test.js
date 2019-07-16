import { expect } from 'chai';
import addMonths from './addMonths.js';

const
	january = 0,
	february = 1,
	november = 10;

describe('addMonths', () => {
	it('should add the given number of months to a Date instance', () => {
		const result = addMonths(new Date(2019, january, 1), 10);
		expect(result.getMonth()).to.equal(november);
	});

	it('should add the given number of months to a timestamp', () => {
		const result = addMonths(new Date(2019, january, 1).getTime(), 10);
		expect(result.getMonth()).to.equal(november);
	});

	it('should cap the day of the month so it does not exceed the number of days in a month', () => {
		const result = addMonths(new Date(2019, january, 31), 1);
		expect(result.getMonth()).to.equal(february);
		expect(result.getDate()).to.equal(28);
	});

	it('should subtract the given number of months when months is a negative integer', () => {
		const result = addMonths(new Date(2019, november, 1), -10);
		expect(result.getMonth()).to.equal(january);
	});

	it('should not modify the provided Date instance', () => {
		const input = new Date(2019, january, 1);
		addMonths(input, 10);
		expect(input.getMonth()).to.equal(january);
	});

	it('should throw an error when the arguments are not of expected type', () => {
		expect(() => addMonths(null)).to.throw(TypeError);
		expect(() => addMonths(new Date(), 'a')).to.throw(TypeError);
	});
});
