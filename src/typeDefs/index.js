/* ========================================================================== *\
	TYPE DEFINITIONS
\* ========================================================================== */
/**
 * Options to control the output of a calendar month range.
 *
 * @typedef {Object} CalenderMonthRangeOptions
 *
 * @property {number} firstWeekDay Specify on which day a week starts. By
 *           default this will be 1 (Monday).
 * @property {boolean} padMonth Indicated whether or not the month should be
 *           padded to full weeks. This is false by default.
 * @property {boolean} padWeeks Indicates whether or not a padded month should
 *           always be 6 weeks long. This setting is only used when padMonth is
 *           true and defaults to false.
 *
 * @since {next}
 */


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
 * @since v1.2.0
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
 *
 * @since v1.2.0
 */
export default {};
