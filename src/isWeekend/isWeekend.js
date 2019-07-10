/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { defaultWeekend } from '../constants/index.js';
import isDateLike from '../_lib/isDateLike/isDateLike.js';



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
 * @returns {boolean} True when the provided date falls on the weekend;
 *          otherwise the result is false.
 *
 * @throws {TypeError} A TypeError is thrown when the arguments are not of
 *         the expected type.
 */
export default function isWeekend(date, weekendDays = defaultWeekend) {
	if (!isDateLike(date)) {
		throw new TypeError('The date argument is not of type Date or Number');
	}
	if (!Array.isArray(weekendDays)) {
		// eslint-disable-next-line max-len
		throw new TypeError('The weekendDays argument is not of type Array. Its values should be between 0 (Sunday) and 6 (Saturday)');
	}

	const
		dayOfWeek = new Date(date).getDay();

	return weekendDays.some(weekendDay => dayOfWeek === weekendDay);
}
