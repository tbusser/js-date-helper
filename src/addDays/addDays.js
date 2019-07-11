/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import isDateLike from '../_lib/isDateLike/isDateLike';



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Returns a new Date instance with a date the specified number of days from the
 * provided date.
 *
 * @param {Date|number} date The date to modify.
 * @param {number} days The number of days to move from the provided date.
 *
 * @returns {Date} The result is a new Date instance the specified number of
 *          days from the provided date.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 */
export default function addDays(date, days) {
	if (!isDateLike(date)) {
		throw new TypeError('The date argument is not of type Date or Number');
	}
	if (!Number.isInteger(days)) {
		throw new TypeError('The days argument is not an integer number');
	}

	const
		result = new Date(date);
	result.setDate(result.getDate() + days);

	return result;
}
