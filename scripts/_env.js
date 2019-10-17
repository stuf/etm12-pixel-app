const { env, exec } = require('shelljs');
const { version } = require('../package.json');

const curEnv = env.NODE_ENV || 'development';

const Key = {
  COMMIT: 'REACT_APP_BUILD_COMMIT',
  BRANCH: 'REACT_APP_BUILD_BRANCH',
  VERSION: 'REACT_APP_BUILD_VERSION',
  ENV: 'REACT_APP_BUILD_ENV',
};

const commit = exec('git rev-parse --short HEAD').stdout.replace('\n', '');
const branch = exec('git rev-parse --abbrev-ref HEAD').stdout.replace('\n', '');

Object.assign(env, {
  [Key.COMMIT]: commit,
  [Key.BRANCH]: branch,
  [Key.VERSION]: version,
  [Key.ENV]: curEnv,
});
