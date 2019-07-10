import { expect } from 'chai';
import isEarlier from './isEarlier.js';

const
	maxDate = new Date(2019, 0, 1, 10, 0, 0, 0),
	afterMax = new Date(2019, 0, 1, 10, 0, 0, 1),
	beforeMax = new Date(2019, 0, 1, 9, 59, 59, 999);

describe('isEarlier', () => {
	it('should return true for dates on or before the max date', () => {
		expect(isEarlier(beforeMax, maxDate)).to.be.true;
		expect(isEarlier(maxDate, maxDate)).to.be.true;
	});

	it('should return false for dates equal to max date when inclusive is false', () => {
		expect(isEarlier(maxDate, maxDate, false)).to.be.false;
	});

	it('should return false for dates after the max date', () => {
		expect(isEarlier(afterMax, maxDate)).to.be.false;
		expect(isEarlier(afterMax, maxDate, false)).to.be.false;
	});

	it('should accept a Date instance or a timestamp', () => {
		expect(isEarlier(beforeMax, maxDate)).to.be.true;
		expect(isEarlier(beforeMax.getTime(), maxDate.getTime())).to.be.true;
	});

	it('should throw an error when the date argument is not of expected type', () => {
		expect(() => isEarlier(null)).to.throw(TypeError);
		expect(() => isEarlier(new Date(), 'a')).to.throw(TypeError);
	});
});
