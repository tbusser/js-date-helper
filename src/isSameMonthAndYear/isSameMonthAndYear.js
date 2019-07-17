/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import isDateLike from '../_lib/isDateLike/isDateLike';
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages';



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Checks if two dates fall in the same month of the same year
 *
 * @param {Date|number} date The date to check
 * @param {Date|number} otherDate The other date to check
 *
 * @returns {boolean} Returns true when both dates fall in the same month of
 *          the same year.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since {next}
 *
 * @example
 * // Check if January 1, 2019 and January 20, 2019 fall in the same month
 * isSameMonthAndYear(new Date(2019, 0, 1), new Date(2019, 0, 20))
 * // => Returns true
 *
 * @example
 * // Check if January 1 in 2019 and 2020 fall in the same month
 * isSameMonthAndYear(new Date(2019, 0, 1), new Date(2020, 0, 1))
 * // => Returns false
 */
export default function isSameMonthAndYear(date, otherDate) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}

	if (!isDateLike(otherDate)) {
		throw new TypeError(dateLikeTypeError('otherDate'));
	}

	const
		dateA = new Date(date),
		dateB = new Date(otherDate);

	return (
		dateA.getMonth() === dateB.getMonth() &&
		dateA.getFullYear() === dateB.getFullYear()
	);
}
