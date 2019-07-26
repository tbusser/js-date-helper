/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import calculateTimeSpan, { resolution } from '../_lib/calculateTimeSpan/calculateTimeSpan.js';
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';
import removeTime from '../removeTime/removeTime.js';



/* ========================================================================== *\
	TYPE DEFINITIONS
\* ========================================================================== */
/**
 * @typedef {import('../typeDefs/index.js').TimeSpanResultOptions} TimeSpanResultOptions
 *
 * @private
 */



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Calculates the number of calendar days between two dates.
 *
 * @param {Date|number} date The first date.
 * @param {Date|number} otherDate The other date.
 * @param {TimeSpanResultOptions} [options] Optional parameter to shape the
 *        result of the the calculation. Only the absolute property is used.
 *
 * @returns {number} Returns the difference between two dates in calendar days.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @see To calculate the difference in 24 hour periods use {@link getTimeSpanInDays}.
 * @since v1.2.0
 *
 * @example
 * // Get the number of calendar days between January 1 at 23:59:59.999 and
 * // January 2 at 00:00:00.001.
 * getTimeSpanInCalendarDays(
 *   new Date(2019, 0, 1, 23, 59, 59, 999),
 *   new Date(2019, 0, 2,  0,  0,  0,   1)
 * );
 * // -> Returns 1
 */
export default function getTimeSpanInCalendarDays(date, otherDate, options) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(otherDate)) {
		throw new TypeError(dateLikeTypeError('otherDate'));
	}

	return calculateTimeSpan(
		removeTime(date),
		removeTime(otherDate),
		resolution.days,
		options
	);
}
