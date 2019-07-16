import { expect } from 'chai';
import getFirstDayOfWeek from './getFirstDayOfWeek.js';

const
	testDate = new Date(2019, 6, 10),  // Wednesday 10, 2019
	testResult = new Date(2019, 6, 8).getTime(),
	tests = [
		new Date(2019, 6, 7),  // Week starts on Sunday
		new Date(2019, 6, 8),  // … Monday
		new Date(2019, 6, 9),  // … Tuesday
		new Date(2019, 6, 10), // … Wednesday
		new Date(2019, 6, 4),  // … Thursday
		new Date(2019, 6, 5),  // … Friday
		new Date(2019, 6, 6)   // … Saturday
	];

describe('getFirstDayOfWeek', () => {
	it('should accept a date instance or a timestamp', () => {
		expect(getFirstDayOfWeek(testDate).getTime()).to.equal(testResult);
		expect(getFirstDayOfWeek(testDate.getTime()).getTime()).to.equal(testResult);
	});

	it('should take into account the starting day of the week', () => {
		tests.forEach((expectedResult, dayOfWeek) => {
			expect(getFirstDayOfWeek(testDate, dayOfWeek).getTime()).to.equal(expectedResult.getTime());
		})
	});

	it('should throw a TypeError when the arguments are not of expected type', () => {
		expect(() => getFirstDayOfWeek(null)).to.throw(TypeError);
		expect(() => getFirstDayOfWeek('a')).to.throw(TypeError);
		expect(() => getFirstDayOfWeek(new Date(), 'a')).to.throw(TypeError);
	});

	it('should throw a RangeError when the firstDayOfWeek argument is not in range', () => {
		expect(() => getFirstDayOfWeek(new Date(), 8)).to.throw(RangeError);
	});
});
