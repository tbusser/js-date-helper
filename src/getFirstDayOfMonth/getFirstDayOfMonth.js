/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages';
import isDateLike from '../_lib/isDateLike/isDateLike';

import removeTime from '../removeTime/removeTime.js';



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * Returns the date of the last day of the month in which the provided
 * date falls.
 *
 * @param {Date|number} date The date for whose month the last day should
 *        be returned.
 *
 * @returns {Date} Returns a new Date instance representing the last day of the
 *          month at midnight.
 *
 * @throws {TypeError} A TypeError is thrown when the provided value is not of
 *         type Date or Number.
 *
 * @since {next}
 *
 * @example
 * // Returns the first day of January 2019
 * getFirstDayOfMonth(new Date(2019, 0, 10, 10, 11, 12));
 * // -> Returns Tuesday, January 1, 2019 at 00:00:00
 */
function getFirstDayOfMonth(date) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}

	const
		result = new Date(date);

	// Set the date to 1 incase the date exceeds the number of days in the next
	// month, this will cause the result to be off by one month.
	result.setDate(1);

	return removeTime(result);
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default getFirstDayOfMonth;
