/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Checks if the provided value is an instance of Date representing a
 * valid date.
 *
 * @param {any} value The value to check.
 *
 * @returns {boolean} Returns true when the provided value is a Date instance
 *          with a valid date.
 *
 * @since v1.0.0
 *
 * @example
 * // For a Date instance with a valid date
 * isValidDate(new Date())
 * // -> Returns true
 *
 * @example
 * // For a Date instance with a invalid date
 * isValidDate(new Date('foo'))
 * // -> Returns false
 *
 * @example
 * // For a valid timestamp
 * isValidDate(1563362089032)
 * // -> Returns false, while a valid timestamp it is not an instance of Date.
 */
export default function isValidDate(value) {
	// When the test passes, value is an instance of Date. Check to make sure
	// getTime() doesn't return NaN to see if it represents a valid date.
	return (Object.prototype.toString.call(value) === '[object Date]')
		? !isNaN(value.getTime())
		: false;
}
