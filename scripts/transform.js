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
	distPath = process.env.PACKAGE_OUTPUT_PATH || path.resolve(process.cwd(), 'dist'),
	distESMPath = `${distPath}/esm`;



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

	await writeFile(`${distPath}/${fileName}`, JSON.stringify(json, null, 4));
	await writeFile(`${distESMPath}/${fileName}`, JSON.stringify({ type: 'module' }, null, 4));
}



/* ========================================================================== *\
	INITIALIZATION
\* ========================================================================== */
transform();
