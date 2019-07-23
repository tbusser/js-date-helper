/* ========================================================================== *\
	EXPORT
\* ========================================================================== */
/**
 *
 * @param {Date|number} date
 * @param {Date|number} otherDate
 *
 * @private
 */
export default function subtractDateLikes(date, otherDate) {
	return (new Date(date)).getTime() - (new Date(otherDate)).getTime();
}
