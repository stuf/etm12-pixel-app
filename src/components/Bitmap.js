import * as React from 'karet';
import * as U from 'karet.util';

import * as T from './Bitmap.d';
import styles from './Bitmap.module.scss';

/**
 *
 * @param {T.Props} props
 */
function Bitmap({ size, scale }) {
  const dom = U.variable();
  return <canvas className={styles.root} ref={U.refTo(dom)} />;
}

export default Bitmap;
