import { expect } from 'chai';
import isToday from './isToday.js';

describe('isToday', () => {
	it('should return true for a Date instances for today', () => {
		const date = new Date();
		expect(isToday(date)).to.be.true;
	});

	it('should return true for a timestamp for today', () => {
		const timestamp = new Date().getTime();
		expect(isToday(timestamp)).to.be.true;
	});

	it('should return false for anything which is not today', () => {
		expect(isToday(new Date(1999, 0, 1))).to.be.false;
		expect(isToday(new Date(2100, 0, 1))).to.be.false;
	});

	it('should not modify the provided Date instance', () => {
		const
			input = new Date(),
			inputTimestamp = input.getTime();

		isToday(input);
		expect(input.getTime()).to.equal(inputTimestamp);
	});

	it('should throw an error when the argument is not of expected type', () => {
		expect(() => isToday(null)).to.throw(TypeError);
		expect(() => isToday('abc')).to.throw(TypeError);
		expect(() => isToday({})).to.throw(TypeError);
		expect(() => isToday(['a'])).to.throw(TypeError);
	});
});
