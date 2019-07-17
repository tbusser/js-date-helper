/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dateLikeTypeError, daysOfWeekArrayTypeError } from '../_lib/errorMessages/errorMessages.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';

import { defaultWeekend } from '../constants/index.js';



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Tests if the provided date falls on the weekend.
 *
 * @param {Date|number} date The date to test
 * @param {Array<number>} [weekendDays=[0,6]] Optional parameter to specify the
 *        days of the week which make up the weekend. By default this will be
 *        [0, 6] (Saturday and Sunday).
 *
 * @returns {boolean} Returns true when the provided date falls on the weekend.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 *
 * @since v1.0.0
 *
 * @example
 * // Checks if Friday, January 4, 2019 falls on the weekend.
 * isWeekend(new Date(2019, 0, 4))
 * // -> Returns false as by default the weekend is Saturday and Sunday.
 *
 * @example
 * // Checks if Friday, January 4, 2019 is part of the weekend for a locale
 * // where the weekend falls on Friday and Saturday.
 * isWeekend(new Date(2019, 0, 4), [5, 6])
 * // -> Returns true
 */
export default function isWeekend(date, weekendDays = defaultWeekend) {
	if (!isDateLike(date)) {
		throw new TypeError(dateLikeTypeError());
	}
	if (!Array.isArray(weekendDays)) {
		throw new TypeError(daysOfWeekArrayTypeError('weekendDays'));
	}

	const
		dayOfWeek = new Date(date).getDay();

	return weekendDays.some(weekendDay => dayOfWeek === weekendDay);
}
