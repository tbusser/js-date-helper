/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';



/* ========================================================================== *\
	PUBLIC API
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
 * @since v1.0.0
 *
 * @example
 * // Tests if January 2019 is later than January 2018
 * isLater(new Date(2018, 0, 1), new Date(2019, 0, 1));
 * // -> Returns true, January 2019 is later.
 *
 * @example
 * // Tests if date is later to itself, by default this is true
 * isLater(new Date(2019, 0, 1), new Date(2019, 0, 1));
 * // -> Returns true, January 2019 is later/equal to itself.
 *
 * @example
 * // Tests if date is later to itself but exclude the min date itself.
 * isLater(new Date(2019, 0, 1), new Date(2019, 0, 1), false);
 * // -> Returns false, January 2019 is not later than itself. */
function isLater(date, minDate, isInclusive = true) {
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



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default isLater;
