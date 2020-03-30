import { expect } from 'chai';
import createRangeForMonth from './createRangeForMonth.js';

const
	initialDate = new Date(2019, 0, 5),
	paddedRangeStart = new Date(2018, 11, 31),
	paddedRangeEnd = new Date(2019, 1, 3),
	rangeStart = new Date(2019, 0, 1),
	rangeEnd = new Date(2019, 0, 31);

describe('createRangeForCalendarMonth', () => {
	it('should throw a TypeError when the arguments are not of expected type', () => {
		expect(() => createRangeForMonth(null)).to.throw(TypeError);
		expect(() => createRangeForMonth('a')).to.throw(TypeError);
		expect(() => createRangeForMonth(new Date(), { firstWeekDay: 'a'})).to.throw(TypeError);
		expect(() => createRangeForMonth(new Date(), { firstWeekDay: 10})).to.throw(RangeError);
	});

	it('should not modify the provided Date instance', () => {
		const
			input = new Date(2019, 0, 1),
			inputTimestamp = input.getTime();

		createRangeForMonth(input);
		expect(input.getTime()).to.equal(inputTimestamp);
	});

	it('should create a range of the specified month', () => {
		const
			daysInRange = 31,
			range = createRangeForMonth(initialDate);
		expect(range.length).to.equal(daysInRange);
		expect(range[0].getTime()).to.equal(rangeStart.getTime());
		expect(range[daysInRange - 1].getTime()).to.equal(rangeEnd.getTime());
	});

	it('should pad the month to full weeks when specified', () => {
		const
			daysInRange = 7 * 5,
			range = createRangeForMonth(initialDate, { padMonth: true });
		expect(range.length).to.equal(daysInRange);
		expect(range[0].getTime()).to.equal(paddedRangeStart.getTime());
		expect(range[daysInRange - 1].getTime()).to.equal(paddedRangeEnd.getTime());
	});

	it('should pad the month to six weeks when specified', () => {
		[
			// When padMonth is false the padWeeks options must be ignored.
			{ options: { padMonth: false, padWeeks: true }, daysInRange: 31, lastDay: new Date(2019, 0, 31) },
			// When padMonth is true the padWeeks options must be applied.
			{ options: { padMonth: true,  padWeeks: true }, daysInRange: 42, lastDay: new Date(2019, 1, 10) }
		].forEach(testCase => {
			const
				range = createRangeForMonth(initialDate, testCase.options);
			expect(range.length).to.equal(testCase.daysInRange);
			expect(range[range.length - 1].getTime()).to.equal(testCase.lastDay.getTime());
		});
	});

	it('should pad the month taking into account the first day of the week', () => {
		[
			// Sunday
			{ options: { firstWeekDay: 0, padMonth: true }, firstDay: new Date(2018, 11, 30) },
			// Monday
			{ options: { firstWeekDay: 1, padMonth: true }, firstDay: new Date(2018, 11, 31) },
			// Tuesday
			{ options: { firstWeekDay: 2, padMonth: true }, firstDay: new Date(2019, 0, 1) },
			// Saturday
			{ options: { firstWeekDay: 6, padMonth: true }, firstDay: new Date(2018, 11, 29) },
		].forEach(testCase => {
			const
				range = createRangeForMonth(initialDate, testCase.options);
			expect(range[0].getTime()).to.equal(testCase.firstDay.getTime());
		});
	});
});
