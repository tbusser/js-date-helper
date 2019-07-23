/**
 * A mapping to go from a day name to the matching JS ordinal.
 *
 * @private
 */
export const dayOfWeek = Object.freeze({
	sunday: 0,
	monday: 1,
	tuesday: 2,
	wednesday: 3,
	thursday: 4,
	friday: 5,
	saturday: 6
});

export const defaultWeekend = [dayOfWeek.saturday, dayOfWeek.sunday];

/**
 * A constant for the number of milliseconds per second.
 *
 * @type {number}
 *
 * @private
 */
export const millisecondsPerSecond = 1000;

/**
 * A constant for the number of milliseconds per minute.
 *
 * @type {number}
 *
 * @private
 */
export const millisecondsPerMinute = millisecondsPerSecond * 60;

/**
 * A constant for the number of milliseconds per hour.
 *
 * @type {number}
 *
 * @private
 */
export const millisecondsPerHour = millisecondsPerMinute * 60;

/**
 * A constant for the number of milliseconds per day.
 *
 * @type {number}
 *
 * @private
 */
export const millisecondsPerDay = millisecondsPerHour * 24;
