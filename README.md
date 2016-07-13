# Getting Started #
On Linux:

1. `git clone ...`
2. `npm install`
3. `node test-meal.js`

Note: make sure node-gyp is installed, e.g. `npm install -g node-gyp`

Mac/Windows: not tested yet.

# Use Test Case Generator #

1. `git clone https://github.com/kenny-y/wn-example.git`
1. Switch to `generate-test-case` branch
1. Do `npm install`
1. Run `node scripts/generate-test-case.js` to generate test case under `generated` directory.
1. Run the generated test by running `mocha generated/test-meal-api-existence.js`
