/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
import subtractDateLikes from '../subtractDateLikes/subtractDateLikes.js';
import {
	millisecondsPerDay,
	millisecondsPerHour,
	millisecondsPerMinute,
	millisecondsPerSecond
} from '../../constants/index.js';



/* ========================================================================== *\
	PRIVATE VARIABLES
\* ========================================================================== */
const
	defaultTimeSpanOptions = {
		absolute: true,
		rounded: true
	};



/* ========================================================================== *\
	TYPE DEFINITIONS
\* ========================================================================== */
/**
 * @typedef {import('../../typeDefs/index.js').TimeSpanResultOptions} TimeSpanResultOptions
 *
 * @private
 */



/* ========================================================================== *\
	PRIVATE METHODS
\* ========================================================================== */
/**
 * Merges the provided options with the default options for delta calculations.
 *
 * @param {*} options The overrides to apply to the default options.
 *
 * @returns {TimeSpanResultOptions}
 *
 * @private
 */
function mergeTimeSpanOptions(options) {
	return Object.assign(
		{},
		defaultTimeSpanOptions,
		options
	);
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
/**
 * Controls the resolution in which the time span will be expressed.
 *
 * @typedef {number} Resolution
 * @enum
 *
 * @private
 */
export const resolution = {
	/**
	 * Returns the time span in milliseconds
	 * @private
	 */
	milliseconds: 1,

	/**
	 * Returns the time span in seconds
	 * @private
	 */
	seconds: millisecondsPerSecond,

	/**
	 * Returns the time span in minutes
	 * @private
	 */
	minutes: millisecondsPerMinute,

	/**
	 * Returns the time span in hours
	 * @private
	 */
	hours: millisecondsPerHour,

	/**
	 * Returns the time span in days
	 * @private
	 */
	days: millisecondsPerDay
};

/**
 * Calculates the difference between two dates /timestamps and modifies the
 * result according to the specified options.
 *
 * @param {Date|number} date The first date.
 * @param {Date|number} otherDate The other date.
 * @param {Resolution} resolution The resolution for the result. IE: return the
 *        result as days or as hours.
 * @param {TimeSpanResultOptions} [options] Optional parameter to configure the
 *        result of the calculation.
 *
 * @returns {number} Returns the difference between the provided dates in the
 *          specified resolution.
 *
 * @since v1.2.0
 * @see Resolution
 *
 * @private
 */
export default function calculateTimeSpan(date, otherDate, resolution=1, options) {
	const
		mergedOptions = mergeTimeSpanOptions(options);

	let
		timeSpan = subtractDateLikes(date, otherDate) / resolution;

	if (mergedOptions.absolute && timeSpan < 0) {
		timeSpan *= -1;
	}

	if (!mergedOptions.rounded) {
		return timeSpan;
	}

	return (timeSpan > 0)
		? Math.floor(timeSpan)
		: Math.ceil(timeSpan);
}
