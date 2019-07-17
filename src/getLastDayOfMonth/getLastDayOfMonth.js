/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages';
import isDateLike from '../_lib/isDateLike/isDateLike';

import removeTime from '../removeTime/removeTime.js';



/* ========================================================================== *\
    EXPORTS
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
 * @since v1.0.0
 *
 * @example
 * // Returns the last day of January 2019
 * getLastDayOfMonth(new Date(2019, 0, 10, 10, 11, 12));
 * // -> Returns Thursday, January 31, 2019 at 00:00:00
 */
export default function getLastDayOfMonth(date) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}

	const
		result = new Date(date);

	// Set the date to 1 incase the date exceeds the number of days in the next
	// month, this will cause the result to be off by one month.
	result.setDate(1);
	// Advance the day to the next month.
	result.setMonth(result.getMonth() + 1);
	// By setting the date to 0 the date will be set to the last day of the
	// previous month which is the month of the initial date.
	result.setDate(0);

	return removeTime(result);
}
