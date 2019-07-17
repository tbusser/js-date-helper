import { expect } from 'chai';
import isSameMonthAndYear from './isSameMonthAndYear.js';

const
	januaryStart = new Date(2019, 0, 1),
	januaryEnd = new Date(2019, 0, 31);

describe('isSameMonthAndYear', () => {
	it('should accept a Date instance or a timestamp', () => {
		expect(isSameMonthAndYear(januaryStart, januaryEnd)).to.be.true;
		expect(isSameMonthAndYear(januaryStart.getTime(), januaryEnd.getTime())).to.be.true;
	});

	it('should return true when the dates occur in the same month of the same year', () => {
		expect(isSameMonthAndYear(januaryEnd, januaryStart)).to.be.true;
	});

	it('should return false when the dates don\'t occur in the same month of the same year', () => {
		expect(isSameMonthAndYear(new Date(2019, 0, 5), new Date(2020, 0, 10))).to.be.false;
		expect(isSameMonthAndYear(new Date(2019, 0, 5), new Date(2020, 1, 10))).to.be.false;
	});

	it('should throw an error when the arguments are not of expected type', () => {
		expect(() => isSameMonthAndYear(null)).to.throw(TypeError);
		expect(() => isSameMonthAndYear(new Date(), 'a')).to.throw(TypeError);
	});
});
