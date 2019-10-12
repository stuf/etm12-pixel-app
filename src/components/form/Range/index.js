/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './index.d';
import styles from './index.module.scss';

/**
 * @param {T.Props} props
 */
function Range({ value, min, max, step, onChange }) {
  return (
    <div className={styles.root}>
      <U.Input {...{ type: 'range', value, min, max, step, onChange }} />
    </div>
  );
}

export default Range;
