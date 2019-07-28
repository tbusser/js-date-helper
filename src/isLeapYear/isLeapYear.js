/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError } from '../_lib/errorMessages/errorMessages';
import isDateLike from '../_lib/isDateLike/isDateLike';



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * Tests if the provided date falls in a leap year.
 *
 * @param {Date|number} date The date to test.
 *
 * @returns {boolean} Returns true when the provided date falls in a leap year.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.3.0
 *
 * @example
 * // Is a date in the year 2000 in a leap year?
 * isLeapYear(new Date(2000, 6, 20))
 * // -> Returns true
 */
function isLeapYear(date) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}

	const
		year = (new Date(date)).getFullYear();

	// The year has to be a multiple of 4, when this is not the case it is for
	// sure not a leap year.
	if (year % 4 !== 0) {
		return false;
	}

	// Years which are divisible by 100 are not leap years UNLESS that year is
	// dividable by 400.
	if (
		year % 100 === 0 &&
		year % 400 !== 0
	) {
		return false;
	}

	return true;
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
export default isLeapYear;
