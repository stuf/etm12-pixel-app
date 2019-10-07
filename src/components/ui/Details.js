import * as React from 'karet';

import * as T from './Details.d';
import styles from './Details.module.scss';

/**
 * @param {T.Props} props
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
