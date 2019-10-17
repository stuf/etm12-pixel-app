#!/usr/bin/env node
const { pushd, exec } = require('shelljs');
require('./_env');

pushd(__dirname);
pushd('..');
exec('npm run build:app');
