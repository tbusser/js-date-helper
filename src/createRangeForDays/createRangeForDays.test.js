import { expect } from 'chai';
import createRangeForDays from './createRangeForDays.js';

const
	startDate = new Date(2019, 0, 1),
	endDate = new Date(2019, 0, 4);

describe('createRangeForDays', () => {
	it('should accept a date instance or a timestamp', () => {
		expect(createRangeForDays(startDate, endDate)[0].getTime()).to.equal(startDate.getTime());
		expect(createRangeForDays(startDate.getTime(), endDate.getTime())[0].getTime()).to.equal(startDate.getTime());
	});

	it('should not modify the provided Date instance', () => {
		const
			input = new Date(2019, 0, 1),
			inputTimestamp = input.getTime();

		createRangeForDays(input, endDate);
		expect(input.getTime()).to.equal(inputTimestamp);
	});

	it('should create a range of the specified number of days', () => {
		expect(createRangeForDays(startDate, endDate).length).to.equal(4);
		expect(createRangeForDays(startDate.getTime(), endDate.getTime()).length).to.equal(4);
	});

	it('should create a range with the proper sequential dates', () => {
		const
			range = createRangeForDays(startDate, endDate);

		range.forEach((date, index) => {
			const
				testDate = new Date(startDate);
			testDate.setDate(testDate.getDate() + index);
			expect(date.getTime()).to.equal(testDate.getTime());
		});
	});

	it('should throw a TypeError when the arguments are not of expected type', () => {
		expect(() => createRangeForDays(null)).to.throw(TypeError);
		expect(() => createRangeForDays(new Date(), 'a')).to.throw(TypeError);
	});

	it('should throw a RangeError when the end date is earlier than the start date', () => {
		expect(() => createRangeForDays(endDate, startDate)).to.throw(RangeError);
	});
});
