/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Checks if the provided value is an instance of Date representing a
 * valid date.
 *
 * @param {any} value The value to check.
 *
 * @returns {boolean} Returns true when the provided object represents a
 *          valid date.
 */
export default function isValidDate(value) {
	// When the test passes, value is an instance of Date. Check to make sure
	// getTime() doesn't return NaN to see if it represents a valid date.
	return (Object.prototype.toString.call(value) === '[object Date]')
		? !isNaN(value.getTime())
		: false;
}
