import * as React from 'karet';
import * as U from 'karet.util';

import styles from './OffsetGuide.module.scss';

import { fstIn, sndIn } from 'common/meta';

export default function OffsetGuide({ offset, size }) {
  return (
    <div
      className={styles.root}
      style={{
        width: fstIn(offset),
        height: sndIn(offset),
      }}
    >
      <div className={U.cns(styles.offsetGuide, styles.yOffsetGuide)}>
        {sndIn(offset)}
      </div>
      <div className={U.cns(styles.offsetGuide, styles.xOffsetGuide)}>
        {fstIn(offset)}
      </div>
    </div>
  );
}
