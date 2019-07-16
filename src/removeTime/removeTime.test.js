import { expect } from 'chai';
import removeTime from './removeTime.js';

/**
 * @private
 */
function createTestDate() {
	// January 1, 2019 at 10:11:12.13
	return new Date(2019, 0, 1, 10, 11, 12, 13);
}

describe('removeTime', () => {
	it('should set the time related properties of a Date instance to 0', () => {
		const result = removeTime(createTestDate());
		expect(result.getTime()).to.equal(new Date(2019, 0, 1, 0, 0, 0, 0).getTime());
	});

	it('should set the time related properties of a timestamp to 0', () => {
		const result = removeTime(createTestDate().getTime());
		expect(result.getTime()).to.equal(new Date(2019, 0, 1, 0, 0, 0, 0).getTime());
	});

	it('should not modify the provided Date instance', () => {
		const
			input = createTestDate(),
			inputTimestamp = input.getTime();

		removeTime(input);
		expect(input.getTime()).to.equal(inputTimestamp);
	});

	it('should throw an error when the argument is not of expected type', () => {
		expect(() => removeTime(null)).to.throw(TypeError);
		expect(() => removeTime('a')).to.throw(TypeError);
	});
});
