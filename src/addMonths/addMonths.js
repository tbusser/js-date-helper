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
 * Adds, or subtracts, the given number of months from the provided date. In
 * case the original date of the month doesn't occur in the result month, the
 * day of the month will be set to the last day in the result month.
 * IE: Add 1 month to Jan 31 will result in Feb 28.
 *
 * @param {Date|number} date The date to add months to.
 * @param {number} months The number of months to move from the provided date.
 *        A negative number will return a date before the provided date.
 *
 * @returns {Date} Returns a new Date instance the specified number of
 *          months from the provided date.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.0.0
 *
 * @example
 * // Add 1 month to January 5, 2019
 * addMonths(new Date(2019, 0, 5), 1);
 * // => Returns Thursday, Thursday, February 5, 2019

 * @example
 * // Add 1 month to January 31, 2019
 * addMonths(new Date(2019, 0, 31), 1);
 * // => Returns Thursday, February 28, 2019 because there is no February 31.
 */
export default function addMonths(date, months) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!Number.isInteger(months)) {
		throw new TypeError(integerTypeError('months'));
	}

	const
		result = new Date(date),
		originalDayOfMonth = result.getDate();

	// When adding the months a side effect can occur when the result month has
	// fewer days than the starting month. This happens when the day of month of
	// the start date doesn't exist in the result month. To prevent this side
	// effect, set the day of the month to 1 before updating the month.
	//
	// Example: Adding 1 month to January 31, 2019 will result in March 3 as
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
