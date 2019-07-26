/* ========================================================================== *\
    IMPORTS
\* ========================================================================== */
import isDateLike from '../_lib/isDateLike/isDateLike.js';
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages.js';



/* ========================================================================== *\
	PUBLIC API
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
 * @since v1.0.0
 *
 * @example
 * // Tests if January 2018 is earlier than January 2019
 * isEarlier(new Date(2018, 0, 1), new Date(2019, 0, 1));
 * // -> Returns true, January 2018 is earlier.
 *
 * @example
 * // Tests if date is earlier to itself, by default this is true
 * isEarlier(new Date(2019, 0, 1), new Date(2019, 0, 1));
 * // -> Returns true, January 2019 is earlier/equal to itself.
 *
 * @example
 * // Tests if date is earlier to itself but exclude the max date itself.
 * isEarlier(new Date(2019, 0, 1), new Date(2019, 0, 1), false);
 * // -> Returns false, January 2019 is not earlier than itself.
 */
function isEarlier(date, maxDate, isInclusive = true) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!isDateLike(maxDate)) {
		throw new TypeError(dateLikeTypeError('maxDate'));
	}

	const
		dateTimestamp = new Date(date).getTime(),
		maxDateTimestamp = new Date(maxDate).getTime();

	return (isInclusive)
		? dateTimestamp <= maxDateTimestamp
		: dateTimestamp < maxDateTimestamp;
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default isEarlier;
