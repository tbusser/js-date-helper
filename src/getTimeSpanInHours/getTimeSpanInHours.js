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
 * Calculates the number of hours between two dates.
 *
 * @param {Date|number} date The first date.
 * @param {Date|number} otherDate The other date
 * @param {TimeSpanResultOptions} options Optional parameter to shape the result
 *        of the the calculation.
 *
 * @returns {number} Returns the difference between two dates in hours.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.2.0
 *
 * @example
 * // Calculate the number of hours between January 1, 2019 at 01:00:00.000
 * // and January 1, 2019 at 02:30:00.000
 * getTimeSpanInHours(
 *     new Date(2019, 0, 1, 1, 0),
 *     new Date(2019, 0, 1, 2, 30)
 * );
 * // -> Returns 1
 *
 * @example
 * // Calculate the number of hours and fractions of an hour between
 * // January 1, 2019 at 01:00:00.000 and January 1, 2019 at 02:30:00.000
 * getTimeSpanInHours(
 *     new Date(2019, 0, 1, 1, 0),
 *     new Date(2019, 0, 1, 2, 30),
 *     { rounded: false }
 * );
 * // -> Returns 1.5
 */
function getTimeSpanInHours(date, otherDate, options) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(otherDate)) {
		throw new TypeError(dateLikeTypeError('otherDate'));
	}

	return calculateTimeSpan(date, otherDate, resolution.hours, options);
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default getTimeSpanInHours;
