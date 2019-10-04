import { expect } from 'chai';
import getDayOfYear from './getDayOfYear.js';

const
	leapYear = new Date(2004, 0, 1);

describe('getDayOfYear', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => getDayOfYear(leapYear)).to.not.throw(TypeError);
		expect(() => getDayOfYear(leapYear.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => getDayOfYear(null)).to.throw(TypeError);
		expect(() => getDayOfYear('a')).to.throw(TypeError);
	});

	it('should return the day of the year', () => {
		for (let day = 1; day <= 365; day++) {
			const date = new Date(2019, 0, day);
			expect(getDayOfYear(date)).to.equal(day, `Test failed for ${ date }`);
		}
	});
});
