import { expect } from 'chai';
import getLastDayOfWeek from './getLastDayOfWeek.js';

const
	testDate = new Date(2019, 6, 10),  // Wednesday 10, 2019
	testResult = new Date(2019, 6, 14).getTime(),
	tests = [
		new Date(2019, 6, 13), // Week starts on Sunday
		new Date(2019, 6, 14), // … Monday
		new Date(2019, 6, 15), // … Tuesday
		new Date(2019, 6, 16), // … Wednesday
		new Date(2019, 6, 10), // … Thursday
		new Date(2019, 6, 11),  // … Friday
		new Date(2019, 6, 12)   // … Saturday
	];

describe('getLastDayOfWeek', () => {
	it('should accept a date instance or a timestamp', () => {
		expect(getLastDayOfWeek(testDate).getTime()).to.equal(testResult);
		expect(getLastDayOfWeek(testDate.getTime()).getTime()).to.equal(testResult);
	});

	it('should take into account the starting day of the week', () => {
		tests.forEach((expectedResult, dayOfWeek) => {
			expect(getLastDayOfWeek(testDate, dayOfWeek).getTime()).to.equal(expectedResult.getTime());
		})
	});

	it('should throw a TypeError when the arguments are not of expected type', () => {
		expect(() => getLastDayOfWeek(null)).to.throw(TypeError);
		expect(() => getLastDayOfWeek('a')).to.throw(TypeError);
		expect(() => getLastDayOfWeek(new Date(), 'a')).to.throw(TypeError);
	});

	it('should throw a RangeError when the firstDayOfWeek argument is not in range', () => {
		expect(() => getLastDayOfWeek(new Date(), 8)).to.throw(RangeError);
	});
});
