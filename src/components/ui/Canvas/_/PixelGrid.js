/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';

import * as H from '../../../../shared';

import * as T from './PixelGrid.d';
import style from './PixelGrid.module.scss';

/**
 * @param {T.Props} props
 */
function PixelGrid({ size, scale }) {
  const scaledSize = H.scaleSize(size, scale);

  const xRange = H.rangeScaled(0, U.view(0, size), scale);
  const yRange = H.rangeScaled(0, U.view(1, size), scale);

  return (
    <div className={style.root}>
      <svg
        width={U.view(0, scaledSize)}
        height={U.view(1, scaledSize)}
        className={style.svg}
      >
        <g className="y-range">
          {U.thru(
            yRange,
            U.mapValue(R.map(R.flip(R.subtract)(0.5))),
            U.mapElems((it, i) => (
              <line key={`y-${i}`} x1={0} x2={'100%'} y1={it} y2={it} />
            )),
          )}
        </g>
        <g className="x-range">
          {U.thru(
            xRange,
            U.mapValue(R.map(R.flip(R.subtract)(0.5))),
            U.mapElems((it, i) => (
              <line key={`x-${i}`} x1={it} x2={it} y1={0} y2={'100%'} />
            )),
          )}
        </g>
      </svg>
    </div>
  );
}

export default PixelGrid;
