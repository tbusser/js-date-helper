/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';

import addDays from '../addDays/addDays.js';
import isEarlier from '../isEarlier/isEarlier.js';
import removeTime from '../removeTime/removeTime.js';



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Creates an array of sequential Date instances.
 *
 * @param {Date|number} startDate The start date of the range (inclusive).
 * @param {Date|number} endDate The date when the range ends (inclusive).
 *
 * @returns {Array<Date>} Returns an array with Date instances, starting at the
 *          start date all the way to the end date.
 *
 * @throws {TypeError} A TypeError is thrown when the provided values are not of
 *         type Date or Number.
 * @throws {RangeError} A RangeError is thrown when the provided end date is
 *         earlier than the start date.
 */
export default function createRangeForDays(startDate, endDate) {
	if (!isDateLike(startDate)) {
		throw new TypeError(dateLikeTypeError('startDate'));
	}
	if (!isDateLike(endDate)) {
		throw new TypeError(dateLikeTypeError('endDate'));
	}
	if (!isEarlier(startDate, endDate)) {
		throw new RangeError('end date cannot be earlier than start date');
	}

	const
		result = [],
		endDateTimestamp = removeTime(endDate);

	let
		currentDate = removeTime(startDate);

	do {
		result.push(currentDate);
		currentDate = addDays(currentDate, 1);
	} while (currentDate.getTime() <= endDateTimestamp);

	return result;
}
