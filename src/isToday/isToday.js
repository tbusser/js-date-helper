/* ========================================================================== *\
    IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';

import removeTime from '../removeTime/removeTime.js';



/* ========================================================================== *\
    EXPORTS
\* ========================================================================== */
/**
 * Checks if the provided date is for the current date. It only checks if the
 * date related properties match with today. Time related properties, like hours
 * and minutes, are ignored.
 *
 * @param {Date|number} date The date to check to see if it is today.
 *
 * @returns {boolean} Returns true when the provided date is today.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 */
export default function isToday(date) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}

	return removeTime(date).getTime() === removeTime(new Date()).getTime();
}
