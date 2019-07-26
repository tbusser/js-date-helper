/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';

import getTimeSpanInMilliseconds from '../getTimeSpanInMilliseconds/getTimeSpanInMilliseconds.js';
import {
	millisecondsPerDay,
	millisecondsPerHour,
	millisecondsPerMinute,
	millisecondsPerSecond
} from '../constants/index.js';



/* ========================================================================== *\
	PRIVATE VARIABLES
\* ========================================================================== */
const
	hoursPerDay = 24,
	minutesPerHour = 60,
	secondsPerMinute = 60;


/* ========================================================================== *\
	TYPE DEFINITIONS
\* ========================================================================== */
/**
 * @typedef {import('../typeDefs/index.js').TimeSpan} TimeSpan
 * @private
 */

/**
 * @typedef {import('../typeDefs/index.js').TimeSpanResultOptions} TimeSpanResultOptions
 * @private
 */



/* ========================================================================== *\
	PRIVATE METHODS
\* ========================================================================== */
/**
 * Converts milliseconds to the specified resolution and rounds it down to the
 * nearest completed unit.
 *
 * @param {number} milliseconds
 * @param {number} resolution
 *
 * @private
 */
function convertMilliseconds(milliseconds, resolution) {
	const
		result = milliseconds / resolution;

	return (result > 0)
		? Math.floor(result)
		: Math.ceil(result);
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Calculates the number of days between two dates.
 *
 * @param {Date|number} date The first date.
 * @param {Date|number} otherDate The other date.
 * @param {TimeSpanResultOptions} [options] Optional parameter to control the
 *        result of the the calculation. Only the absolute property is used.
 *
 * @returns {TimeSpan} Returns the difference between two dates as a time span.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since {next}
 *
 * @example
 * // Get the time span between January 1, 2019 at 00:00:00.000 and
 * // January 15, 2019 at 12:30:30.500
 * getTimeSpan(
 *   new Date(2019, 0, 1),
 *   new Date(2019, 0, 15, 12, 45, 30, 500)
 * );
 * // => Returns { days: 14, hours: 12, minutes: 45, seconds: 30, milliseconds: 500 }
 */
export default function getTimeSpan(date, otherDate, options) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(otherDate)) {
		throw new TypeError(dateLikeTypeError('otherDate'));
	}

	const
		delta = getTimeSpanInMilliseconds(date, otherDate, options);

	return {
		days: convertMilliseconds(delta, millisecondsPerDay),
		hours: convertMilliseconds(delta, millisecondsPerHour) % hoursPerDay,
		minutes: convertMilliseconds(delta, millisecondsPerMinute) % minutesPerHour,
		seconds: convertMilliseconds(delta, millisecondsPerSecond) % secondsPerMinute,
		milliseconds: delta % millisecondsPerSecond
	};
}
