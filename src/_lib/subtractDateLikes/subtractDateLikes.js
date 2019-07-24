/* ========================================================================== *\
	EXPORT
\* ========================================================================== */
/**
 * Subtracts two dates /time stamps and returns the result.
 *
 * @param {Date|number} date The first date. In case of the value being a date
 *        instance, the UTC time will be used.
 * @param {Date|number} otherDate The other date. In case of the value being a
 *        date instance, the UTC time will be used.
 *
 * @returns {number} The difference between the provided dates /time stamps
 *          in milliseconds.
 *
 * @private
 */
export default function subtractDateLikes(date, otherDate) {
	return (new Date(date)).getTime() - (new Date(otherDate)).getTime();
}
