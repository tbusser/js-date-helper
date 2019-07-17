# Changelog
This file will mention all notable changes to this project.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/tbusser/js-date-helper/compare/v1.0.5...v1.1.0
[1.0.5]: https://github.com/tbusser/js-date-helper/compare/v1.0.4...v1.0.5
