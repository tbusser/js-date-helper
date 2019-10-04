/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages';
import isDateLike from '../_lib/isDateLike/isDateLike';

import getTimeSpanInCalendarDays from '../getTimeSpanInCalendarDays/getTimeSpanInCalendarDays';



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * Returns which day of the year a given date is.
 *
 * @param {Date|number} date The date for which to return the day number in the
 *        year for.
 *
 * @returns {boolean} Returns which day of the year the given date is.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.4.0
 *
 * @example
 * // Which day of the year is September 27, 2019
 * getDayOfYear(new Date(2019, 8, 27))
 * // -> Returns 270
 */
function getDayOfYear(date) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}

	const
		inputDate = new Date(date),
		startOfYear = new Date(inputDate.getFullYear(), 0, 1);

	// We don't want to return the difference in calendar days, the day itself
	// has to be counted too. Therefor add 1 to the result.
	return (getTimeSpanInCalendarDays(inputDate, startOfYear) + 1);
}


/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default getDayOfYear;
