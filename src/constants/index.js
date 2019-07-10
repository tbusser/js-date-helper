/**
 * A mapping to go from a day name to the matching JS ordinal.
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
