/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError, integerTypeError } from '../_lib/errorMessages/errorMessages';
import isDateLike from '../_lib/isDateLike/isDateLike';
import addMonths from '../addMonths/addMonths';



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * Adds, or subtracts, the specified number of years from the provided date.
 *
 * @param {Date|number} date The date to modify.
 * @param {number} days The number of years to move from the provided date. A
 *        negative number will return a date before the provided date.
 *
 * @returns {Date} Returns a new Date instance the specified number of
 *          years from the provided date.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.1.0
 *
 * @example
 * // Adds 5 years to January 1, 2019
 * addYears(new Date(2019, 0, 1), 5)
 * // -> Returns Monday, January 1, 2024
 *
 * @example
 * // Counts back 5 days from January 1, 2019
 * addYears(new Date(2019, 0, 1), -5)
 * // -> Returns Wednesday, December 27, 2014
 */
function addYears(date, years) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!Number.isInteger(years)) {
		throw new TypeError(integerTypeError('years'));
	}

	return addMonths(date, years * 12);
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default addYears;
