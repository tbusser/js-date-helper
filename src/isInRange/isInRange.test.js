import { expect } from 'chai';
import isInRange from './isInRange.js';

const
	beforeMinDate = new Date(2019, 0, 1,  9, 59, 59, 998),
	minDate       = new Date(2019, 0, 1,  9, 59, 59, 999),
	testDate      = new Date(2019, 0, 1, 10,  0,  0,   0),
	maxDate       = new Date(2019, 0, 1, 10,  0,  0,   1),
	afterMaxDate  = new Date(2019, 0, 1, 10,  0,  0,   2);

describe('isInRange', () => {
	it('should return true when the date is between the min and max date', () => {
		expect(isInRange(testDate, minDate, maxDate)).to.be.true;
	});

	it('should return true when the date equals the min and/or max date', () => {
		expect(isInRange(minDate, minDate, maxDate)).to.be.true;
		expect(isInRange(maxDate, minDate, maxDate)).to.be.true;
		expect(isInRange(minDate, minDate, minDate)).to.be.true;
	});

	it('should return false when the date is not between the min and max date', () => {
		expect(isInRange(afterMaxDate, minDate, maxDate)).to.be.false;
		expect(isInRange(beforeMinDate, minDate, maxDate)).to.be.false;
	});

	it('should return false when the date equals the min and/or max date and inclusive is false', () => {
		expect(isInRange(minDate, minDate, maxDate, false)).to.be.false;
		expect(isInRange(maxDate, minDate, maxDate, false)).to.be.false;
		expect(isInRange(minDate, minDate, minDate, false)).to.be.false;
	});

	it('should throw an error when the arguments are not of expected type', () => {
		expect(() => isInRange(null)).to.throw(TypeError);
		expect(() => isInRange(beforeMinDate, 'a')).to.throw(TypeError);
	});
});
