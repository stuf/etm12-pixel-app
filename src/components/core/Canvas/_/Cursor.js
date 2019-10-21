import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as L from 'kefir.partial.lenses';

import styles from './Cursor.module.scss';

import { fstIn, sndIn } from 'common/meta';
import { scalePositionWith, truncPosition } from 'common/position';
import { asPx, parenthesize } from 'common/util';

export default function Cursor({ pos, scale }) {
  const scaledPos = truncPosition(scalePositionWith(scale, pos));

  const cursorSize = R.add(1, scale);
  const tl = U.thru(scaledPos, R.map(asPx), R.join(','));

  return (
    <div
      className={styles.root}
      style={{
        width: cursorSize,
        height: cursorSize,
        transform: U.string`translate(${tl})`,
      }}
    />
  );
}
