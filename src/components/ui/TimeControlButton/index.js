/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import * as T from './index.d';

import Button from 'components/ui/Button';
/**
 *
 * @param {T.Props} props
 */
function TimeControlButton({ count, children }) {
  return (
    <Button
      group
      action={U.doModify(count, R.dec)}
      disabled={R.equals(count, 0)}
    >
      {children}
      {U.when(count, U.string`(${count})`)}
    </Button>
  );
}

export default TimeControlButton;
