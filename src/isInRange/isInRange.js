/* ========================================================================== *\
    IMPORTS
\* ========================================================================== */
import isEarlier from '../isEarlier/isEarlier.js';
import isLater from '../isLater/isLater.js';



/* ========================================================================== *\
    EXPORTS
\* ========================================================================== */
/**
 * Tests if a date is between two other dates.
 *
 * @param {Date|number} date The date to check if it falls within the specified
 *        range of dates.
 * @param {Date|number} minDate The minimum date to compare against.
 * @param {Date|number} maxDate The maximum date to compare against.
 * @param {boolean} [isMinMaxInclusive=true] Optional parameter to specify
 *        whether the min and max dates are considered a valid date. By default
 *        this is true, the min and max date itself are considered to be valid.
 *
 * @returns {boolean} Returns true when the provided date is after the min date
 *          and before the max date.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 */
export default function isInRange(date, minDate, maxDate, isMinMaxInclusive = true) {
	const
		validAgainstMin = isLater(date, minDate, isMinMaxInclusive),
		validAgainstMax = isEarlier(date, maxDate, isMinMaxInclusive);

	return validAgainstMin && validAgainstMax;
}
