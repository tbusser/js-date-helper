/* ========================================================================== *\
    IMPORTS
\* ========================================================================== */
import {
	dateLikeTypeError,
	dayOfWeekRangeError,
	integerTypeError
} from '../_lib/errorMessages/errorMessages.js';
import { dayOfWeek } from '../constants/index.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';
import isValidDayOfWeek from '../_lib/isValidDayOfWeek/isValidDayOfWeek.js';

import addDays from '../addDays/addDays.js';
import removeTime from '../removeTime/removeTime.js';



/* ========================================================================== *\
    EXPORTS
\* ========================================================================== */
/**
 * Returns the first day of the week in which the provided date falls.
 *
 * @param {Date|number} date The date for which to return the first day of
 *       the week.
 * @param {number} [firstWeekDay=1] Optional parameter to specify on which day
 *        a week starts. By default this will be Monday.
 *
 * @returns {Date} Returns a new Date instance with the date of the first day of
 *          the week at midnight.
 *
 * @throws {TypeError} A TypeError is thrown when the provided value is not of
 *         type Date or Number.
 * @throws {RangeError} A RangeError is thrown when the firstWeekDay is not a
 *         valid day of the week.
 */
export default function getFirstDayOfWeek(date, firstWeekDay = dayOfWeek.monday) {
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
		// When the day is before the first day in the week a correction is
		// needed
		delta = (day < firstWeekDay)
			? -(7 - firstWeekDay + day)
			: firstWeekDay - day;

	return (delta === 0)
		? result
		: addDays(result, delta);
}
