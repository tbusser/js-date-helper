/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError, integerTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';

import addDays from '../addDays/addDays.js';



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * Creates an array of sequential Date instances.
 *
 * @param {Date|number} startDate The start date of the range.
 * @param {number} length The number of days to return. When it is a negative
 *        number the range will start in the past and the last day in the range
 *        will be the start date.
 *
 * @returns {Array<Date>} Returns an array with the specified number of
 *          Date instances.
 *
 * @throws {TypeError} A TypeError is thrown when the provided values are not of
 *         type Date or Number.
 *
 * @since v1.0.0
 *
 * @example
 * // Create a range with 3 dates, starting at January 1, 2019
 * createRange(new Date(2019, 0, 1), 3)
 * // -> Returns [
 * //     Tuesday, January 1, 2019
 * //     Wednesday, January 2, 2019
 * //     Thursday, January 3, 2019
 * // ]
 *
 * @example
 * // Create a range with 3 dates, ending at January 1, 2019
 * createRange(new Date(2019, 0, 1), -3)
 * // -> Returns [
 * //     Sunday, December 30, 2018
 * //     Monday, December 31, 2018
 * //     Tuesday, January 1, 2019
 * // ]
 */
function createRange(startDate, length) {
	if (!isDateLike(startDate)) {
		throw new TypeError(dateLikeTypeError('startDate'));
	}
	if (!Number.isInteger(length)) {
		throw new TypeError(integerTypeError('length'));
	}

	// When length is a negative number the range should start in the past so
	// that when the range is generated the last date in the range is the
	// start date.
	let currentDate = (length < 0)
		? addDays(startDate, (length + 1))
		: new Date(startDate);

	const
		ubound = Math.abs(length),
		result = [];

	for (let index = 0; index < ubound; index++) {
		result.push(currentDate);
		currentDate = addDays(currentDate, 1);
	}

	return result;
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default createRange;
