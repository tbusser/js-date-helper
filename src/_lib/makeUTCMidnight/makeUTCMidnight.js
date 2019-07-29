/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Takes a date and returns a Date instance with the same date as the input but
 * with its time set to midnight UTC.
 *
 * @param {Date | number} date
 *
 * @returns {Date}
 */
export default function makeUTCMidnight(date) {
	const inputDate = new Date(date);

	return new Date(Date.UTC(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), 0, 0, 0, 0));
}
