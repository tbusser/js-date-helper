import { expect } from 'chai';
import addYears from './addYears.js';

describe('addYears', () => {
	it('should add the given number of years to a Date instance', () => {
		const result = addYears(new Date(2019, 0, 1), 10);
		expect(result.getFullYear()).to.equal(2029);
	});

	it('should add the given number of years to a timestamp', () => {
		const result = addYears(new Date(2019, 0, 1).getTime(), 10);
		expect(result.getFullYear()).to.equal(2029);
	});

	it('should subtract the given number of years when years is a negative integer', () => {
		const result = addYears(new Date(2019, 0, 1), -10);
		expect(result.getFullYear()).to.equal(2009);
	});

	it('should not modify the provided Date instance', () => {
		const input = new Date(2019, 0, 1);
		addYears(input, 10);
		expect(input.getFullYear()).to.equal(2019);
	});

	it('should throw an error when the arguments are not of expected type', () => {
		expect(() => addYears(null)).to.throw(TypeError);
		expect(() => addYears(new Date(), 'a')).to.throw(TypeError);
	});
});
