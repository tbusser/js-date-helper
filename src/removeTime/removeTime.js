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
 *
 * @example
 * // Returns a date instance with the time set to midnight for Tuesday,
 * // January 1, 2019 at 10:11:12.13
 * removeTime(new Date(2019, 0, 1, 10, 11, 12, 13))
 * // => Returns January 1, 2019 at 00:00:00.000
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
