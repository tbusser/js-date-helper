#!/usr/bin/env node

/**
 * @file
 *
 * Generates package.json files for the following files:
 * - tmp/package/<submodule>
 * 	 These are the submodules based on the src files. The package.json in these
 *   folders will contain a module entry pointing to the ESM version of that
 *   submodule
 * - tmp/package/esm/<submodule>
 *   The package.json file in these folders only contain the the setting that
 *   the module has no side effects.
 */


/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
const { writeFile } = require('mz/fs')
const listSubmodules = require('./_lib/listSubmodules.js');



/* ========================================================================== *\
	PRIVATE VARIABLES
\* ========================================================================== */
const
	path = require('path'),
	rootPath = process.env.PACKAGE_OUTPUT_PATH || path.resolve(process.cwd(), 'tmp/package'),
	initialPackages = getInitialPackages(),

	defaultJSONContent = {
		sideEffects: false
	};



/* ========================================================================== *\
	PRIVATE METHODS
\* ========================================================================== */
/**
 * Processes all the submodules and adds for each submodule a new entry pointing
 * to the ESM version of the submodule.
 *
 * @returns {Array<Object>}
 */
function createEsmEntries() {
	return listSubmodules().reduce((modules, module) => {
		const
			esm = Object.assign({}, module, {
				fullPath: module.fullPath.replace('./src/', './src/esm/')
			});

		return [...modules, module, esm];
	}, []);
}

/**
 * Generates an object where the key is the full path of a submodule in the
 * source folder and a value which is an object with a single property: module.
 * The value of module will be a path, relative to the current submodule,
 * pointing the the ESM version of the file.
 */
function getInitialPackages() {
	return listSubmodules().reduce((modulesByPath, module) => {
		modulesByPath[module.fullPath] = getModulePackage(module.fullPath);

		return modulesByPath;
	}, {});
}

/**
 *
 * @param {*} fullPath
 */
function getModulePackage(fullPath) {
	const
		dirPath = path.dirname(fullPath),
		subPath = dirPath.match(/^\.\/src\/(.+)$/)[1],
		esmRelativePath = path.relative(dirPath, `./src/esm/${subPath}/index.js`);

	return {
		module: esmRelativePath
	};
}

/**
 *
 * @param {*} fullPath
 */
function writePackage(fullPath) {
	const
		dirPath = path.dirname(fullPath),
		packagePath = path.resolve(rootPath, `${dirPath.replace('./src/', './')}/package.json`);

	return writeFile(
		packagePath,
		JSON.stringify(
			Object.assign(
				{},
				defaultJSONContent,
				initialPackages[fullPath] || {} // This will add the module property for the files in tmp/packages/<submodule>
			),
			null,
			2
		)
	);
}



/* ========================================================================== *\
	INITIALIZATION
\* ========================================================================== */
Promise.all([createEsmEntries()
		.filter(module => !module.fullPath.includes('/esm/'))
		.map(module => writePackage(module.fullPath))
	])
	.then(() => console.log('Package.json files have been generated.'));
