import { expect } from 'chai';
import getFirstDayOfMonth from './getFirstDayOfMonth.js';

const
	testDate = new Date(2019, 6, 10),
	testResult = new Date(2019, 6, 1).getTime(),
	months = [
		new Date(2019, 0, 1),  // Jan
		new Date(2019, 1, 1),  // Feb
		new Date(2019, 2, 1),  // Mar
		new Date(2019, 3, 1),  // Apr
		new Date(2019, 4, 1),  // May
		new Date(2019, 5, 1),  // Jun
		new Date(2019, 6, 1),  // Jul
		new Date(2019, 7, 1),  // Aug
		new Date(2019, 8, 1),  // Sep
		new Date(2019, 9, 1),  // Oct
		new Date(2019, 10, 1), // Nov
		new Date(2019, 11, 1)  // Dec
	];

describe('getFirstDayOfMonth', () => {
	it('should accept a date instance or a timestamp', () => {
		expect(getFirstDayOfMonth(testDate).getTime()).to.equal(testResult);
		expect(getFirstDayOfMonth(testDate.getTime()).getTime()).to.equal(testResult);
	});

	it('should return the first day of the month for any day in a month', () => {
		months.forEach((expectedResult, month) => {
			const
				lastDate = expectedResult.getDate(),
				expectedTimestamp = expectedResult.getTime();
			for (let day = 1; day <= lastDate; day++) {
				expect(getFirstDayOfMonth(new Date(2019, month, day)).getTime()).to.equal(expectedTimestamp);
			}
		});
	});

	it('should return a date with the time set to midnight', () => {
		const
			result = getFirstDayOfMonth(new Date(2019, 0, 10, 10, 11, 12, 13));

		expect(result.getHours()).to.equal(0);
		expect(result.getMinutes()).to.equal(0);
		expect(result.getSeconds()).to.equal(0);
		expect(result.getMilliseconds()).to.equal(0);
	});


	it('should not modify the provided Date instance', () => {
		const
			input = new Date(testDate),
			inputTimestamp = input.getTime();

		getFirstDayOfMonth(input);
		expect(input.getTime()).to.equal(inputTimestamp);
	});

	it('should throw an error when the argument is not of expected type', () => {
		expect(() => getFirstDayOfMonth(null)).to.throw(TypeError);
		expect(() => getFirstDayOfMonth('a')).to.throw(TypeError);
	});
});
