/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages';
import isDateLike from '../_lib/isDateLike/isDateLike';



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Returns a new Date instance containing only the year, month, and day of the
 * provided date. All time related properties are set to 0.
 *
 * @param {Date|number} date The date from which to strip the time.
 *
 * @returns {Date} A new Date instance with only the year, month, and date from
 *          the provided date.
 *
 * @throws {TypeError} A TypeError is thrown when the provided value is not of
 *         type Date or Number.
 */
export default function removeTime(date) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}

	const
		result = new Date(date);
	result.setHours(0, 0, 0, 0);

	return result;
}
