import { expect } from 'chai';
import isLeapYear from './isLeapYear.js';

const
	leapYear = new Date(2004, 0, 1);

describe('isLeapYear', () => {
	it('should accept Date instances and timestamps', () => {
		expect(() => isLeapYear(leapYear)).to.not.throw(TypeError);
		expect(() => isLeapYear(leapYear.getTime())).to.not.throw(TypeError);
	});

	it('should throw a TypeError when arguments are not of expected type', () => {
		expect(() => isLeapYear(null)).to.throw(TypeError);
		expect(() => isLeapYear('a')).to.throw(TypeError);
	});

	it('should return true for leap years', () => {
		expect(isLeapYear(new Date(1996, 0, 1))).to.be.true;
		expect(isLeapYear(new Date(2000, 0, 1))).to.be.true;
		expect(isLeapYear(new Date(2020, 0, 1))).to.be.true;
	});


	it('should return false for years which cannot be divided by 4', () => {
		expect(isLeapYear(new Date(2001, 0, 1))).to.be.false;
		expect(isLeapYear(new Date(1997, 0, 1))).to.be.false;
	});

	it('should return false for years divisible by 100 but not 400', () => {
		expect(isLeapYear(new Date(1900, 0, 1))).to.be.false;
		expect(isLeapYear(new Date(2100, 0, 1))).to.be.false;
	});

	it('should return true for years divisible by 400', () => {
		expect(isLeapYear(new Date(2000, 0, 1))).to.be.true;
		expect(isLeapYear(new Date(2400, 0, 1))).to.be.true;
	});
});
