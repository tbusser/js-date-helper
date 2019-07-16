import { expect } from 'chai';
import createRange from './createRange.js';

const
	startDate = new Date(2019, 0, 1);

describe('createRange', () => {
	it('should accept a date instance or a timestamp', () => {
		expect(createRange(startDate, 1)[0].getTime()).to.equal(startDate.getTime());
		expect(createRange(startDate.getTime(), 1)[0].getTime()).to.equal(startDate.getTime());
	});

	it('should not modify the provided Date instance', () => {
		const
			input = new Date(2019, 0, 1),
			inputTimestamp = input.getTime();

		createRange(input, 2);
		expect(input.getTime()).to.equal(inputTimestamp);
	});

	it('should create a range of the specified number of days', () => {
		for (let index = 0; index <= 10; index++) {
			expect(createRange(startDate, index).length).to.equal(index);
		}
	});

	it('should start earlier when length is negative', () => {
		const
			result = createRange(startDate, -4),
			firstResultDate = new Date(2018, 11, 29);

		expect(result[3].getTime()).to.equal(startDate.getTime());
		expect(result[0].getTime()).to.equal(firstResultDate.getTime());
	});

	it('should create a range with the proper sequential dates', () => {
		const
			startDate = new Date(2019, 0, 28),
			numberOfDays = 10,
			range = createRange(startDate, numberOfDays);

		range.forEach((date, index) => {
			const
				testDate = new Date(startDate);
			testDate.setDate(testDate.getDate() + index);
			expect(date.getTime()).to.equal(testDate.getTime());
		})
	});

	it('should throw an error when the arguments are not of expected type', () => {
		expect(() => createRange(null)).to.throw(TypeError);
		expect(() => createRange(new Date(), 'a')).to.throw(TypeError);
	});
});
