/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import * as T from './index.d';

const buildCommitIn = U.view('REACT_APP_BUILD_COMMIT');
const buildBranchIn = U.view('REACT_APP_BUILD_BRANCH');
const buildVersionIn = U.view('REACT_APP_BUILD_VERSION');
const buildEnvIn = U.view('REACT_APP_BUILD_ENV');

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function BuildInfo({ env = {} }) {
  return (
    <div className="flex-horizontal -vertical-center -justify-end pad -p-right">
      {U.unless(
        R.isEmpty(env),
        <div className="text -right -small">
          {buildVersionIn(env)} ({buildCommitIn(env)}) – env: {buildEnvIn(env)}{' '}
          – branch: {buildBranchIn(env)}
        </div>,
      )}
    </div>
  );
}

export default BuildInfo;
