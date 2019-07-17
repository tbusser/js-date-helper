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

import addDays from '../addDays/addDays.js';
import { dayOfWeek } from '../constants/index.js';
import removeTime from '../removeTime/removeTime.js';



/* ========================================================================== *\
    EXPORTS
\* ========================================================================== */
/**
 * Returns the last day of the week in which the provided date falls.
 *
 * @param {Date|number} date The date for which to return the last day of
 *       the week.
 * @param {number} [firstWeekDay=1] Optional parameter to specify on which day
 *        a week starts. By default this will be Monday.
 *
 * @returns {Date} Returns a new Date instance with the date of the last day of
 *          the week at midnight.
 *
 * @throws {TypeError} A TypeError is thrown when the provided value is not of
 *         type Date or Number.
 * @throws {RangeError} A RangeError is thrown when the firstWeekDay is not a
 *         valid day of the week.
 *
 * @since v1.0.0
 *
 * @example
 * // Returns the last day of the week in which January 10, 2019 falls
 * getLastDayOfWeek(new Date(2019, 0, 10))
 * // -> Returns Sunday, January 13, 2019
 *
 * @example
 * // Returns the last day of the week in which January 10, 2019 falls for a
 * // locale where the week starts on Sunday (0)
 * getLastDayOfWeek(new Date(2019, 0, 10), 0)
 * // -> Returns Saturday, January 12, 2019
 */
export default function getLastDayOfWeek(date, firstWeekDay = dayOfWeek.monday) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!Number.isInteger(firstWeekDay)) {
		throw new TypeError(integerTypeError('firstWeekDay'));
	}
	if (!isValidDayOfWeek(firstWeekDay)) {
		throw new RangeError(dayOfWeekRangeError('firstWeekDay'));
	}

	const
		result = removeTime(date),
		day = result.getDay(),
		delta = (day < firstWeekDay)
			? firstWeekDay - 1 - day
			: 6 - day + firstWeekDay;

	return (delta === 0)
		? result
		: addDays(result, delta);
}
