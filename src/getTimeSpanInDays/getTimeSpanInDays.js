/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import calculateTimeSpan, { resolution } from '../_lib/calculateTimeSpan/calculateTimeSpan.js';
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';



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
 * Calculates the number of days, as in 24 hour periods, between two dates.
 *
 * @param {Date|number} date The first date.
 * @param {Date|number} otherDate The other date.
 * @param {TimeSpanResultOptions} [options] Optional parameter to shape the
 *        result of the the calculation.
 *
 * @returns {number} Returns the difference between two dates in days.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @see To calculate the difference in calendar days use {@link getTimeSpanInCalendarDays}.
 * @since {next}
 *
 * @example
 * // Get the number of days between January 1 at 23:59:59.999 and
 * // January 2 at 00:00:00.001.
 * getTimeSpanInDays(
 *   new Date(2019, 0, 1, 23, 59, 59, 999),
 *   new Date(2019, 0, 2,  0,  0,  0,   1)
 * );
 * // -> Returns 0
 *
 * @example
 * // Get the number of days between January 1 at 00:00:00.000 and
 * // January 5 at 12:45:30.001.
 * getTimeSpanInDays(
 *   new Date(2019, 0, 1),
 *   new Date(2019, 0, 5, 12, 45, 30, 1)
 * );
 * // -> Returns 4
 *
 * @example
 * // Get the number of days and fraction of days between January 1
 * // at 00:00:00.000 and January 2 at 12:00:00.000.
 * getTimeSpanInDays(
 *   new Date(2019, 0, 1),
 *   new Date(2019, 0, 2, 12),
 *   { rounded: false }
 * );
 * // -> Returns 1.5
 */
export default function getTimeSpanInDays(date, otherDate, options) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(otherDate)) {
		throw new TypeError(dateLikeTypeError('otherDate'));
	}

	return calculateTimeSpan(date, otherDate, resolution.days, options);
}
