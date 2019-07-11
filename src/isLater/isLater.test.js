import { expect } from 'chai';
import isLater from './isLater.js';

const
	minDate = new Date(2000, 0, 1, 10, 0, 0, 0),
	afterMin = new Date(2000, 0, 1, 10, 0, 0, 1),
	beforeMin = new Date(2000, 0, 1, 9, 59, 59, 999);

describe('isLater', () => {
	it('should return true for dates on or after the min date', () => {
		expect(isLater(afterMin, minDate)).to.be.true;
		expect(isLater(minDate, minDate)).to.be.true;
	});

	it('should return false for dates equal to min date when inclusive is false', () => {
		expect(isLater(minDate, minDate, false)).to.be.false;
	});

	it('should return false for dates before the min date', () => {
		expect(isLater(beforeMin, minDate)).to.be.false;
		expect(isLater(beforeMin, minDate, false)).to.be.false;
	});

	it('should accept a Date instance or a timestamp', () => {
		expect(isLater(afterMin, minDate)).to.be.true;
		expect(isLater(afterMin.getTime(), minDate.getTime())).to.be.true;
	});

	it('should throw an error when the date argument is not of expected type', () => {
		expect(() => isLater(null)).to.throw(TypeError);
		expect(() => isLater(afterMin, 'a')).to.throw(TypeError);
	});
});
