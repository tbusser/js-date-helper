import { expect } from 'chai';
import addDays from './addDays.js';

describe('addDays', () => {
	it('should add the given number of days to a Date instance', () => {
		const result = addDays(new Date(2019, 0, 1), 30);
		expect(result.getDate()).to.equal(31);
	});

	it('should add the given number of days to a timestamp', () => {
		const result = addDays(new Date(2019, 0, 1).getTime(), 30);
		expect(result.getDate()).to.equal(31);
	});

	it('should subtract the given number of days when days is a negative number', () => {
		const
			input = new Date(2019, 0, 8),
			expectedResult = new Date(2018, 11, 29);
		expect(addDays(input, -10).getTime()).to.equal(expectedResult.getTime());
	});

	it('should not modify the provided Date instance', () => {
		const input = new Date(2019, 0, 1);
		addDays(input, 10);
		expect(input.getDate()).to.equal(1);
	});

	it('should throw an error when the arguments are not of expected type', () => {
		expect(() => addDays(null)).to.throw(TypeError);
		expect(() => addDays(new Date(), 'a')).to.throw(TypeError);
	});
});
