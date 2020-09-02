// eslint-disable-next-line @typescript-eslint/no-var-requires
const { lowerCase } = require('lodash');

function getCurrentEnv() {
  let currentEnv = lowerCase(process.env.NODE_ENV);
  if (!currentEnv) {
    currentEnv = '';
  }
  return currentEnv;
}

const isDevEnv = getCurrentEnv() === 'dev';

let env;
if (isDevEnv) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { config } = require('dotenv');
  const { parsed } = config();
  env = parsed;
} else {
  env = process.env;
}

module.exports = { env, isDevEnv, getCurrentEnv };
