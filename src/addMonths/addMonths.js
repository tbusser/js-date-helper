/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError, integerTypeError } from '../_lib/errorMessages/errorMessages';
import isDateLike from '../_lib/isDateLike/isDateLike';

import getLastDayOfMonth from '../getLastDayOfMonth/getLastDayOfMonth.js';



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Returns a new Date instance with a date the specified number of months from
 * the provided date. The day of the month (DotM) will be the last day of the
 * month in case the original DotM doesn't exist in the result month.
 *
 * @param {Date|number} date The date to add months to.
 * @param {number} months The number of months to move from the provided date.
 *
 * @returns {Date} Returns a new Date instance the specified number of
 *          months from the provided date.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @example
 * // Add 1 month to January 31, 2019
 * addMonths(new Date(2019, 0, 31), 1);
 * // => February 28, 2019
 */
export default function addMonths(date, months) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!Number.isInteger(months)) {
		throw new TypeError(integerTypeError(months));
	}

	const
		result = new Date(date),
		originalDayOfMonth = result.getDate();

	// When adding the months a side effect can occur when the result month has
	// fewer days than the starting month. This happens when the day of month of
	// the start date doesn't exist in the result month. To prevent this side
	// effect, set the day of the month to 1 before updating the month.
	//
	// Example: Adding 1 month to January 31 ,2019 will result in a March 3 as
	//          February has only 28 days in 2019.
	result.setDate(1);
	result.setMonth(result.getMonth() + months);
	const
		daysInMonth = getLastDayOfMonth(result).getDate(),
		correctedDayOfMonth = Math.min(daysInMonth, originalDayOfMonth);

	// Set the date to either the original day of the month or the last day of
	// the new month, which ever is smaller.
	result.setDate(correctedDayOfMonth);

	return result;
}
