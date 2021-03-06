# JavaScript Date Helpers [![Build Status](https://travis-ci.com/tbusser/js-date-helper.svg?branch=develop)](https://travis-ci.com/tbusser/js-date-helper) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftbusser%2Fjs-date-helper.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftbusser%2Fjs-date-helper?ref=badge_shield)

A lightweight, tree shakable, and tested JavaScript library for working with dates.

## Documentation
There is a documentation site which will inform you of the methods available. The documentation contains information like parameter types, return values and a short description what each method does. The documentation can be found [here](https://tbusser.github.io/js-date-helper/)

## Dependencies
The library itself has no dependencies. To be able to test and build the library a few packages are required. Most notably:
- [Babel](https://babeljs.io/) to create a version of the library which can be used on Node.js
- [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for unit testing
- [Istanbul](https://istanbul.js.org/) for code coverage

## Installation and usage
To add the library to your project, you can install it using your favorite package manager like so:
```bash
npm install --save-dev js-date-helper
```

or
```bash
yarn add -D js-date-helper
```

With the library installed you can import only the methods you need.
```js
import { addDays, addMonths } from 'js-date-helper';
```
If you use a bundler like Webpack or Rollup it will be able to tree shake the library and only bundle the library methods you use.

# Missing something?
In case you're missing a feature or some of documentation is unclear, please [create an issue](https://github.com/tbusser/js-date-helper/issues) on Github.

# Contributing
Contributions are more than welcome. If you want to contribute to this project, please keep the following in mind:
- The project includes an editorconfig with rules for line feeds, indentation, etc. Make sure your changes follow to these settings.
- The project uses ESLint to lint the code, please make sure your changes do not introduce linting issues.
- Each library method lives in its own subfolder under the `src` folder. For each method there should be a similar named test file with the unit tests.
```
─ src/
  └─ myCoolFeature/
     ├─ myCoolFeature.js
     └─ myCoolFeature.test.js
```
- Each method must contain unit tests to make sure everything keeps working as intended.

# License
This project is released under the [MIT](https://choosealicense.com/licenses/mit/) license.
