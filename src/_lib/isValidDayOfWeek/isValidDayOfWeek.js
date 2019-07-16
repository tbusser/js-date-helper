/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import { dayOfWeek } from '../../constants';



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Checks if a number is a valid day of the week.
 *
 *
 * @param {number} dayOfWeek The number to check.
 *
 * @returns {boolean} Returns true when day is a valid day of the week.
 *
 * @private
 */
export default function isValidDayOfWeek(day) {
	return (
		day >= dayOfWeek.sunday &&
		day <= dayOfWeek.saturday
	);
}
