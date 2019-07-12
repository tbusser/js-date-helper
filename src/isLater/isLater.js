/* ========================================================================== *\
    IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';



/* ========================================================================== *\
    EXPORTS
\* ========================================================================== */
/**
 * Test if the provided date falls after a minimum date.
 *
 * @param {Date|number} date The date to check against a minimum date.
 * @param {Date|number} minDate The minimum date to compare against.
 * @param {boolean} [isInclusive=true] Optional parameter to specify whether the
 *        min date is considered a valid date. By default this is true, the min
 *        date itself is considered to be valid.
 *
 * @returns {boolean} Returns true when the provided date is later than
 *          the provided min date.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @example
 *   // This wil return true
 *   const date = new Date(2019, 0, 1);
 *   isLater(date, date);
 *   // This will return false
 *   isLater(date, date, false);
 */
export default function isLater(date, minDate, isInclusive = true) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(minDate)) {
		throw new TypeError(dateLikeTypeError('minDate'));
	}

	const
		dateTimestamp = new Date(date).getTime(),
		minDateTimestamp = new Date(minDate).getTime();

	return (isInclusive)
		? dateTimestamp >= minDateTimestamp
		: dateTimestamp > minDateTimestamp;
}
