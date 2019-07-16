import { expect } from 'chai';
import isValidDate from './isValidDate.js';

describe('isValidDate', () => {
	it('should return true for valid Date instances', () => {
		const date = new Date();
		expect(isValidDate(date)).to.be.true;
	});

	it('should return false for a date instance which is invalid', () => {
		const date = new Date('not-valid');
		expect(isValidDate(date)).to.be.false;
	});

	it('should return false when the provided value is not a Date instance', () => {
		expect(isValidDate(new Date().getTime())).to.be.false;
		expect(isValidDate('string')).to.be.false;
		expect(isValidDate(123)).to.be.false;
		expect(isValidDate({})).to.be.false;
		expect(isValidDate(null)).to.be.false;
		expect(isValidDate(['a'])).to.be.false;
	})
});
