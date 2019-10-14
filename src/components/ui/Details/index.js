/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[KT]"}] */
import * as React from 'karet';

import * as T from './index.d';
import styles from './index.module.scss';

/**
 * @param {T.Props} props
 * @return {T.Component}
 */
function Details({ title, children, open = true }) {
  return (
    <details open={open} className={styles.root}>
      <summary className={styles.summary}>{title}</summary>

      <div className={styles.children}>{children}</div>
    </details>
  );
}

export default Details;
