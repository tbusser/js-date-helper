import { expect } from 'chai';
import isWeekend from './isWeekend.js';

const
	sunday = new Date(2019, 6, 14),
	monday = new Date(2019, 6, 15);

describe('isWeekend', () => {
	it('should accept a Date instance or a timestamp', () => {
		expect(isWeekend(sunday)).to.be.true;
		expect(isWeekend(sunday.getTime())).to.be.true;
	});

	it('should return true when the date is on a weekend', () => {
		expect(isWeekend(sunday)).to.be.true;
	});

	it('should return false when the date is not on a weekend', () => {
		expect(isWeekend(monday)).to.be.false;
	});

	it('should take into account the specified weekend days', () => {
		expect(isWeekend(monday, [1])).to.be.true;
		expect(isWeekend(sunday, [1])).to.be.false;
	});

	it('should throw an error when the arguments are not of expected type', () => {
		expect(() => isWeekend(null)).to.throw(TypeError);
		expect(() => isWeekend(new Date(), 'a')).to.throw(TypeError);
	});
});
