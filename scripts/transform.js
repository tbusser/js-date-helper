#!/usr/bin/env node

/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
const { readFile, writeFile } = require('mz/fs');



/* ========================================================================== *\
	PRIVATE VARIABLES
\* ========================================================================== */
const
	fileName = 'package.json',
	path = require('path'),
	rootPath = path.resolve(process.cwd()),
	distPath = process.env.PACKAGE_OUTPUT_PATH || path.resolve(process.cwd(), 'dist');



/* ========================================================================== *\
	PRIVATE METHODS
\* ========================================================================== */
async function transform() {
	const
		rawData = await readFile(`${rootPath}/${fileName}`),
		json = JSON.parse(rawData);

	delete json.devDependencies;
	delete json.nyc;
	delete json.scripts;

	json.type = 'module';

	await writeFile(`${distPath}/${fileName}`, JSON.stringify(json, null, 4));
}



/* ========================================================================== *\
	INITIALIZATION
\* ========================================================================== */
transform();
