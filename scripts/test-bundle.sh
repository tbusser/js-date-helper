#!/bin/bash

set -e

echo "generating bundle"
./scripts/build.sh
echo "starting test script"
./scripts/bundle/test.js
