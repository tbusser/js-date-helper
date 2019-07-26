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
 * Calculates the number of milliseconds between two dates.
 *
 * @param {Date|number} date The first date.
 * @param {Date|number} otherDate The other date.
 * @param {TimeSpanResultOptions} [options] Optional parameter to control the
 *        result of the the calculation. Only the absolute property is used.
 *
 * @returns {number} Returns the difference between two dates in milliseconds.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.2.0
 *
 * @example
 * // Get the milliseconds between January 1 at 0:0:1.000
 * // and January 1 at 0:0:2.500.
 * getTimeSpanInMilliseconds(
 *     new Date(2019, 0, 1, 0, 0, 1),
 *     new Date(2019, 0, 1, 0, 0, 2, 500)
 * );
 * // -> Returns 1500
 *
 * @example
 * // Get the milliseconds between January 1 at 0:0:1.000
 * // and January 1 at 0:0:2.500 in the order the dates
 * // are provided.
 * getTimeSpanInMilliseconds(
 *     new Date(2019, 0, 1, 0, 0, 1),
 *     new Date(2019, 0, 1, 0, 0, 2, 500),
 *     { absolute: false }
 * );
 * // -> Returns -1500
 */
export default function getTimeSpanInMilliseconds(date, otherDate, options) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(otherDate)) {
		throw new TypeError(dateLikeTypeError('otherDate'));
	}

	return calculateTimeSpan(date, otherDate, resolution.milliseconds, options);
}
