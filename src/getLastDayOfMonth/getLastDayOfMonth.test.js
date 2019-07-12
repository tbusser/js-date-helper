import { expect } from 'chai';
import getLastDayOfMonth from './getLastDayOfMonth.js';

const
	testDate = new Date(2019, 6, 10),
	testResult = new Date(2019, 6, 31).getTime(),
	months = [
		new Date(2019, 0, 31),  // Jan
		new Date(2019, 1, 28),  // Feb
		new Date(2019, 2, 31),  // Mar
		new Date(2019, 3, 30),  // Apr
		new Date(2019, 4, 31),  // May
		new Date(2019, 5, 30),  // Jun
		new Date(2019, 6, 31),  // Jul
		new Date(2019, 7, 31),  // Aug
		new Date(2019, 8, 30),  // Sep
		new Date(2019, 9, 31),  // Oct
		new Date(2019, 10, 30), // Nov
		new Date(2019, 11, 31)  // Dec
	];

describe('getLastDayOfMonth', () => {
	it('should accept a date instance or a timestamp', () => {
		expect(getLastDayOfMonth(testDate).getTime()).to.equal(testResult);
		expect(getLastDayOfMonth(testDate.getTime()).getTime()).to.equal(testResult);
	});

	it('should return the last day of the month for any day in a month', () => {
		months.forEach((expectedResult, month) => {
			const
				lastDate = expectedResult.getDate(),
				expectedTimestamp = expectedResult.getTime();
			for (let day = 1; day <= lastDate; day++) {
				expect(getLastDayOfMonth(new Date(2019, month, day)).getTime()).to.equal(expectedTimestamp);
			}
		});
	});

	it('should handle leap years', () => {
		const expectedResult = new Date(2016, 1, 29).getTime();
		for (let day = 1; day <= 29; day++) {
			expect(getLastDayOfMonth(new Date(2016, 1, day)).getTime()).to.equal(expectedResult);
		}
	});

	it('should return a date with the time set to midnight', () => {
		const
			result = getLastDayOfMonth(new Date(2019, 0, 1, 10, 11, 12, 13));

		expect(result.getHours()).to.equal(0);
		expect(result.getMinutes()).to.equal(0);
		expect(result.getSeconds()).to.equal(0);
		expect(result.getMilliseconds()).to.equal(0);
	});


	it('should not modify the provided Date instance', () => {
		const
			input = new Date(testDate),
			inputTimestamp = input.getTime();

		getLastDayOfMonth(input);
		expect(input.getTime()).to.equal(inputTimestamp);
	});

	it('should throw an error when the argument is not of expected type', () => {
		expect(() => getLastDayOfMonth(null)).to.throw(TypeError);
		expect(() => getLastDayOfMonth('a')).to.throw(TypeError);
	});
});
