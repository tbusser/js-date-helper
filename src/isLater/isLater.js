/* ========================================================================== *\
    IMPORTS
\* ========================================================================== */
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
 *   isLater(new Date('1999-12-31'), new Date('1999-12-31'));
 *   // This will return false
 *   isLater(new Date('1999-12-31'), new Date('1999-12-31'), false);
 */
export default function isLater(date, minDate, isInclusive = true) {
	if (!isDateLike(date)) {
		throw new TypeError('The date argument is not of type Date or Number');
	}
	if (!isDateLike(minDate)) {
		throw new TypeError('The minDate argument is not of type Date or Number');
	}

	const
		dateTimestamp = new Date(date).getTime(),
		minDateTimestamp = new Date(minDate).getTime();

	return (isInclusive)
		? dateTimestamp >= minDateTimestamp
		: dateTimestamp > minDateTimestamp;
}
