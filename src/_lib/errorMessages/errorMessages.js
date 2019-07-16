/* eslint-disable max-len */

/* ========================================================================== *\
	RANGE ERROR
\* ========================================================================== */
/**
 * Returns a "argument is not integer between 0 and 6" message.
 *
 * @param {string} [paramName="date"] The name of the argument.
 *
 * @returns {string} Returns the error message.
 */
export const dayOfWeekRangeError = (paramName) => `The ${ paramName } argument is not an integer between 0 (Sunday) and 6 (Saturday)`;



/* ========================================================================== *\
	TYPE ERRORS
\* ========================================================================== */
/**
 * Returns a "argument is not of type Date or Number" message.
 *
 * @param {string} [paramName="date"] The name of the argument, by default it
 *        will be "date".
 *
 * @returns {string} Returns the error message.
 */
export const dateLikeTypeError = (paramName = 'date') => `The argument ${ paramName } is not of type Date or Number`;

/**
 * Returns a "argument is not an integer" message.
 *
 * @param {string} paramName The name of the argument.
 *
 * @returns {string} Returns the error message.
 */
export const integerTypeError = (paramName) => `The argument ${ paramName } is not an integer number`;

/**
 * Returns a "argument is not an array of day of the week" message.
 *
 * @param {string} paramName The name of the argument.
 *
 * @returns {string} Returns the error message.
 */
export const daysOfWeekArrayTypeError = (paramName) => 'The argument ${ paramName} is not of type Array. Its values should be between 0 (Sunday) and 6 (Saturday)'
