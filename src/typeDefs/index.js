/* ========================================================================== *\
	TYPE DEFINITIONS
\* ========================================================================== */
/**
 * Options to control the output of a time span calculation.
 *
 * @typedef {Object} TimeSpanResultOptions
 *
 * @property {boolean} [absolute=true] Indicates whether or not the result
 *           should be calculated between the latest and earliest date. By
 *           default this is true. When false the result can be a negative
 *           number in case the first date is earlier than the second date.
 * @property {boolean} [rounded=true] Returns the result as an integer rounded
 *           to the nearest completed unit of time.
 *
 * @since {next}
 */


/**
 * Represents a time interval.
 *
 * @typedef {Object} TimeSpan
 *
 * @property {number} days The number of days passed between two dates. Please
 *           note that these are not calendar days but periods of 24 hours.
 * @property {number} hours The number of hours that don't make a full day.
 * @property {number} minutes The number of minutes that don't make a full hour.
 * @property {number} seconds The number of seconds that don't make a
 *           full minute.
 * @property {number} milliseconds The number of milliseconds that don't make a
 *           full second.
 */
export default {};
