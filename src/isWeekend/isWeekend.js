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
 * @param {Array<number>} [weekendDays=[number]] The days of the week which
 *        make up the weekend. By default this will be Saturday and Sunday.
 *
 * @returns {boolean} Returns true when the provided date falls on the weekend.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
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
