/* ========================================================================== *\
    IMPORTS
\* ========================================================================== */
import isDateLike from '../_lib/isDateLike/isDateLike.js';



/* ========================================================================== *\
    EXPORTS
\* ========================================================================== */
/**
 * Test if the provided date falls before a maximum date. The comparison is made
 * including the time component of the date.
 *
 * @param {Date|number} date The date to check against a maximum date.
 * @param {Date|number} maxDate The maximum date to compare against.
 * @param {boolean} [isInclusive=true] Optional parameter to specify whether the
 *        max date is considered a valid date. By default this is true, the max
 *        date itself is considered to be valid.
 *
 * @returns {boolean} Returns true when the provided date is earlier than
 *          the provided max date.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @example
 *   // This wil return true
 *   isEarlier(new Date('1999-12-31'), new Date('1999-12-31'));
 *   // This will return false
 *   isEarlier(new Date('1999-12-31'), new Date('1999-12-31'), false);
 */
export default function isEarlier(date, maxDate, isInclusive = true) {
	if (!isDateLike(date)) {
		throw new TypeError('The date argument is not of type Date or Number');
	}
	if (!isDateLike(maxDate)) {
		throw new TypeError('The maxDate argument is not of type Date or Number')
	}

	const
		dateTimestamp = new Date(date).getTime(),
		maxDateTimestamp = new Date(maxDate).getTime();

	return (isInclusive)
		? dateTimestamp <= maxDateTimestamp
		: dateTimestamp < maxDateTimestamp;
}
