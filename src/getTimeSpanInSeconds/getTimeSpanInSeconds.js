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
 * @private
 */



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * Calculates the number of seconds between two dates.
 *
 * @param {Date|number} date The first date.
 * @param {Date|number} otherDate The other date
 * @param {TimeSpanResultOptions} options Optional parameter to shape the
 *        result of the the calculation.
 *
 * @returns {number} Returns the difference between two dates in seconds.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.2.0
 *
 * @example
 * // Calculate the number of seconds between January 1, 2019 at 00:01:00.000
 * // and January 1, 2019 at 00:02:30.500
 * getTimeSpanInSeconds(
 *     new Date(2019, 0, 1, 0, 1),
 *     new Date(2019, 0, 1, 0, 2, 30, 500)
 * );
 * // -> Returns 90
 *
 * @example
 * // Calculate the number of seconds and fractions of a second between
 * // January 1, 2019 at 00:01:00.000 and January 1, 2019 at 00:02:30.500
 * getTimeSpanInSeconds(
 *     new Date(2019, 0, 1, 0, 1),
 *     new Date(2019, 0, 1, 0, 2, 30, 500),
 *     { rounded: false }
 * );
 * // -> Returns 90.5
 */
function getTimeSpanInSeconds(date, otherDate, options) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(otherDate)) {
		throw new TypeError(dateLikeTypeError('otherDate'));
	}

	return calculateTimeSpan(date, otherDate, resolution.seconds, options);
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default getTimeSpanInSeconds;
