/* ========================================================================== *\
	IMPORTS
\* ========================================================================== */
const path = require('path');
const fs = require('fs');



/* ========================================================================== *\
	PRIVATE VARIABLES
\* ========================================================================== */
const ignoredFiles = [
	'esm',
	'constants',
	'index.js',
	'test.js',
	'package.json',
	'typeDefs'
];



/* ========================================================================== *\
	PUBLIC API
\* ========================================================================== */
/**
 * @returns {Array<>}
 */
function listSubmodules() {
	const
		files = fs.readdirSync(path.join(process.cwd(), 'src'));

	return files
		.filter(file => {
			return /^[^._]/.test(file) && !ignoredFiles.includes(file)
		})
		.map(file => ({
			name: file,
			path: `./${file}`,
			fullPath: `./src/${file}/${file}.js`
		}));
}



/* ========================================================================== *\
	EXPORTS
\* ========================================================================== */
module.exports = listSubmodules
