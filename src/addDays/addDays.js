/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError, integerTypeError } from '../_lib/errorMessages/errorMessages';
import isDateLike from '../_lib/isDateLike/isDateLike';



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * Adds, or subtracts, the specified number of days from the provided date.
 *
 * @param {Date|number} date The date to modify.
 * @param {number} days The number of days to move from the provided date. A
 *        negative number will return a date before the provided date.
 *
 * @returns {Date} Returns a new Date instance the specified number of
 *          days from the provided date.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.0.0
 *
 * @example
 * // Adds 5 days to January 1, 2019
 * addDays(new Date(2019, 0, 1), 5)
 * // -> Returns Sunday, January 6, 2019
 *
 * @example
 * // Counts back 5 days from January 1, 2019
 * addDays(new Date(2019, 0, 1), -5)
 * // -> Returns Thursday, December 27, 2018
 */
function addDays(date, days) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!Number.isInteger(days)) {
		throw new TypeError(integerTypeError('days'));
	}

	const
		result = new Date(date);
	result.setDate(result.getDate() + days);

	return result;
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default addDays;
