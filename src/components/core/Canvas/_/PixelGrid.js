import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import styles from './PixelGrid.module.scss';

import { rangeScaled } from 'common/data';
import { scaleSize } from 'common/canvas';
import { fstIn, sndIn } from 'common/meta';

export default function PixelGrid({ size, scale }) {
  const scaledSize = scaleSize(size, scale);

  const xRange = rangeScaled(0, fstIn(scaledSize), scale);
  const yRange = rangeScaled(0, sndIn(scaledSize), scale);

  return (
    <div className={styles.root}>
      <svg
        className={styles.svg}
        width={fstIn(scaledSize)}
        height={sndIn(scaledSize)}
      >
        <g className="y-range">
          {U.thru(
            yRange,
            R.map(R.flip(R.subtract)(0.5)),
            U.mapElems((it, i) => (
              <line key={`y-${i}`} x1={0} x2={'100%'} y1={it} y2={it} />
            )),
          )}
        </g>

        <g className="x-range">
          {U.thru(
            xRange,
            R.map(R.flip(R.subtract)(0.5)),
            U.mapElems((it, i) => (
              <line key={`x-${i}`} x1={it} x2={it} y1={0} y2={'100%'} />
            )),
          )}
        </g>
      </svg>
    </div>
  );
}
