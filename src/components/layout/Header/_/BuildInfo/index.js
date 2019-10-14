/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import * as T from './index.d';

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
          {env.REACT_APP_BUILD_VERSION} ({env.REACT_APP_BUILD_COMMIT}) – env:{' '}
          {env.REACT_APP_BUILD_ENV} – branch: {env.REACT_APP_BUILD_BRANCH}
        </div>,
      )}
    </div>
  );
}

export default BuildInfo;
