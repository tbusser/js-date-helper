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
 * Calculates the number of minutes between two dates.
 *
 * @param {Date|number} date The first date.
 * @param {Date|number} otherDate The other date
 * @param {TimeSpanResultOptions} options Optional parameter to shape the result
 *        of the the calculation.
 *
 * @returns {number} Returns the difference between two dates in minutes.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.2.0
 *
 * @example
 * // Calculate the number of minutes between January 1, 2019 at 00:01:00.000
 * // and January 1, 2019 at 00:02:30.500
 * getTimeSpanInMinutes(
 *     new Date(2019, 0, 1, 0, 1),
 *     new Date(2019, 0, 1, 0, 2, 30, 500)
 * );
 * // -> Returns 1
 *
 * @example
 * // Calculate the number of minutes and fractions of a minute between
 * // January 1, 2019 at 00:01:00.000 and January 1, 2019 at 00:02:30.500
 * getTimeSpanInMinutes(
 *     new Date(2019, 0, 1, 0, 1),
 *     new Date(2019, 0, 1, 0, 2, 30, 500),
 *     { rounded: false }
 * );
 * // -> Returns 1.5083333333333333
 */
export default function getTimeSpanInMinutes(date, otherDate, options) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(otherDate)) {
		throw new TypeError(dateLikeTypeError('otherDate'));
	}

	return calculateTimeSpan(date, otherDate, resolution.minutes, options);
}
