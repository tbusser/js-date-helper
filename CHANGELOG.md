# Changelog
This file will mention all notable changes to this project.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.2] - 2020-04-96
### Fixed
- Fixed the build so it is able to run on Node 12.16.1 (LTS)

## [1.5.1] - 2020-03-30
### Fixed
- Fixed the build so it is able to run on Node 12.16.1 (LTS)

## [1.5.0] - 2020-03-30
### Added
- method `createRangeForMonth`

## [1.4.0] - 2019-10-05
### Added
- method `getDayOfYear`
- method `getFirstDayOfMonth`

## [1.3.1] - 2019-07-29
### Fixed
- Time span calculations with a result in calendar days returned a wrong value when the input dates had one date in DST and the other not in DST.

## [1.3.0] - 2019-07-28
### Added
- method `isLeapYear`

## [1.2.1] - 2019-07-26
### Fixed
- Build script would include typeDefs in the generated index file.

## [1.2.0] - 2019-07-26
### Added
- method `getTimeSpan`
- method `getTimeSpanInCalendarDays`
- method `getTimeSpanInDays`
- method `getTimeSpanInHours`
- method `getTimeSpanInMilliseconds`
- method `getTimeSpanInMinutes`
- method `getTimeSpanInSeconds`

## [1.1.1] - 2019-07-18
### Fixed
- Build script would create invalid file paths for generated package.json files.

## [1.1.0] - 2019-07-17
### Added
- @since JSDoc tags to all library methods
- method `addYears`
- method `isSameMonthAndYear`

### Changed
- Replaced "=>" in the JSDoc examples with "->" to avoid confusion with the fat arrow methods.

### Fixed
- Fixed the exception message for an invalid month argument for the addMonths method

## [1.0.5] - 2019-07-17

### Added
- Examples for the documentation for the following methods:
    - getLastDayOfMonth
    - getLastDayOfWeek
    - isEarlier
    - isLater
    - isValidDate
    - isToday
    - isWeekend
    - removeTime

### Changed
- Hidden unit test methods from documentation
- Ignore the docs folder

### Fixed
- There was an error in the script generating the index.js, it was referencing the old file names from before the current naming scheme

[Unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.5.2...HEAD
[1.5.2]: https://github.com/tbusser/js-date-helper/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/tbusser/js-date-helper/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/tbusser/js-date-helper/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/tbusser/js-date-helper/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/tbusser/js-date-helper/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/tbusser/js-date-helper/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/tbusser/js-date-helper/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/tbusser/js-date-helper/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/tbusser/js-date-helper/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/tbusser/js-date-helper/compare/v1.0.5...v1.1.0
[1.0.5]: https://github.com/tbusser/js-date-helper/compare/v1.0.4...v1.0.5
