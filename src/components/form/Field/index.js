/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T]"}] */
import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './index.d';
import styles from './index.module.scss';

/**
 * @param {T.Props} props
 */
function Field({ label, value }) {
  return (
    <div className={styles.root}>
      <label>{label}</label>

      <U.Input value={value} />
    </div>
  );
}

export default Field;
