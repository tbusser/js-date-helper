/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Tests if the provided value is date like. In this instance it means it is
 * either an instance of Date or an instance of Number.
 *
 * @param {*} value The value to test
 *
 * @returns {boolean} True when the provided value is date like; otherwise the
 *          result is false.
 *
 * @private
 */
export default function isDateLike(value) {
	if (
		Object.prototype.toString.call(value) !== '[object Date]' &&
		Object.prototype.toString.call(value) !== '[object Number]'
	) {
		return false;
	}

	return true;
}
