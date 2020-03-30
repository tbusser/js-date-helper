/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import {
	dateLikeTypeError,
	dayOfWeekRangeError,
	integerTypeError
} from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';
import isValidDayOfWeek from '../_lib/isValidDayOfWeek/isValidDayOfWeek.js';

import { dayOfWeek } from '../constants';

import addDays from '../addDays/addDays.js';
import createRangeForDays from '../createRangeForDays/createRangeForDays.js';
import getFirstDayOfMonth from '../getFirstDayOfMonth/getFirstDayOfMonth.js';
import getFirstDayOfWeek from '../getFirstDayOfWeek/getFirstDayOfWeek.js';
import getLastDayOfMonth from '../getLastDayOfMonth/getLastDayOfMonth.js';
import getLastDayOfWeek from '../getLastDayOfWeek/getLastDayOfWeek.js';
import getTimeSpanInCalendarDays from '../getTimeSpanInCalendarDays/getTimeSpanInCalendarDays.js';



/* ========================================================================== *\
	TYPE DEFINITIONS
\* ========================================================================== */
/**
 * @typedef {import('../typeDefs/index.js').CalenderMonthRangeOptions} CalenderMonthRangeOptions
 *
 * @private
 */

/**
 * @typedef {Object} Boundaries
 *
 * @property {Date} start The first day of the range.
 * @property {Date} end The last day of the range.
 */


/* ========================================================================== *\
	PRIVATE VARIABLES
\* ========================================================================== */
const
	/** @type {CalenderMonthRangeOptions} */
	defaultOptions = {
		firstWeekDay: dayOfWeek.monday,
		padMonth: false,
		padWeek: false
	};


/* ========================================================================== *\
	PRIVATE METHODS
\* ========================================================================== */
/**
 * Determines the start and end date of the range to create.
 *
 * @param {Date} date
 * @param {CalenderMonthRangeOptions} options
 *
 * @returns {Boundaries}
 */
function determineBoundaries(date, options) {
	/** @type {Boundaries} */
	const
		boundaries = {
			start: getFirstDayOfMonth(date),
			end: getLastDayOfMonth(date)
		};

	if (!options.padMonth) {
		return boundaries;
	}

	boundaries.start = getFirstDayOfWeek(boundaries.start, options.firstWeekDay),
	boundaries.end = getLastDayOfWeek(boundaries.end, options.firstWeekDay)

	if (
		options.padWeeks &&
		getTimeSpanInCalendarDays(boundaries.start, boundaries.end) !== 41
	) {
		boundaries.end = addDays(boundaries.end, 7);
	}

	return boundaries;
}



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * Creates an array of sequential Date instances covering an entire
 * calendar month. By using the options it is possible to pad the month to full
 * weeks, to always return six weeks, and to specify the first day of the week.
 *
 * @param {Date|number} date A day in the month for which to return all
 *        the dates.
 * @param {CalenderMonthRangeOptions | null} options An optional parameter to
 *        shape the result of the returned range.
 *
 * @returns {Array<Date>} Returns an array with Date instances, starting at the
 *          first day of the requested month and ending at the last day of the
 *          requested month.
 *
 * @throws {TypeError} A TypeError is thrown when the provided values are not of
 *         type Date or Number.
 * @throws {TypeError} A TypeError is thrown when the provided firstWeekDay is
 *         not of type Number.
 * @throws {RangeError} A RangeError is thrown when the firstWeekDay is not a
 *         valid day of the week.
 *
 * @since v1.5.0
 *
 * @example
 * // Create a range for the month January 2019.
 * createRangeForMonth(new Date(2019, 0, 10))
 * // -> Returns [
 * //     Tuesday, January 1, 2019,
 * //     Wednesday, January 2, 2019,
 * //     Thursday, January 3, 2019,
 * //     ...
 * //     Thursday, January 31, 2019
 * // ]
 *
 * @example
 * // Create a range for the month January 2019, padded to full weeks.
 * createRangeForMonth(new Date(2019, 0, 10), { padMonth: true })
 * // -> Returns [
 * //     Monday, December 31, 2018,
 * //     Tuesday, January 1, 2019,
 * //     Wednesday, January 2, 2019,
 * //     ...
 * //     Sunday, February 3, 2019
 * // ]
 *
 * @example
 * // Create a range for the month January 2019, padded to full weeks, when a
 * // week starts on a Sunday.
 * createRangeForMonth(new Date(2019, 0, 10), { padMonth: true, firstWeekDay: 0 })
 * // -> Returns [
 * //     Sunday, December 30, 2018,
 * //     Monday, December 31, 2018,
 * //     Tuesday, January 1, 2019,
 * //     ...
 * //     Saturday, February 2, 2019
 * // ]
 */
function createRangeForMonth(date, options) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError('date'));
	}

	const
		mergedOptions = {...defaultOptions, ...options};

	if (!Number.isInteger(mergedOptions.firstWeekDay)) {
		throw new TypeError(integerTypeError('options.firstWeekDay'));
	}
	if (!isValidDayOfWeek(mergedOptions.firstWeekDay)) {
		throw new RangeError(dayOfWeekRangeError('options.firstWeekDay'));
	}


	const
		boundaries = determineBoundaries(date, mergedOptions);

	return createRangeForDays(boundaries.start, boundaries.end);
}


/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default createRangeForMonth;
