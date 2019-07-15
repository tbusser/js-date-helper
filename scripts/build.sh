#!/bin/bash

set -e

# cd to the root dir
root="$(pwd)/$(dirname "$0")/.."
cd "$root" || exit 1

PATH="$(npm bin):$PATH"
# XXX: $PACKAGE_OUTPUT_PATH must be an absolute path!
dir=${PACKAGE_OUTPUT_PATH:-"$root/dist"}

# Clean up output dir
rm -rf "$dir"
mkdir -p "$dir"

./scripts/create-index.js

# Transpile SRC to CommonJS modules
env NODE_ENV='commonjs' babel src --source-root src --out-dir "$dir" --ignore test.js,benchmark.js
# Transpile SRC to ESM modules
env NODE_ENV='esm' babel src --source-root src --out-dir "$dir/esm" --ignore test.js,benchmark.js --quiet

cp -r "package.json" "$dir"
cp -r "README.md" "$dir"

# Remove the test files
find "$dir" -type f -name "*.test.js" -delete

./scripts/package-json.js
