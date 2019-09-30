import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'ramda';

import * as H from '../shared';

import style from './PixelGrid.module.scss';

function PixelGrid({ size, scale }) {
  const width = U.view(0, size);

  const scaledSize = H.scaleSize(size, scale);

  const xRange = H.rangeScaled(0, U.view(0, size), scale);
  const yRange = H.rangeScaled(0, U.view(1, size), scale);

  return (
    <svg
      width={U.view(0, scaledSize)}
      height={U.view(1, scaledSize)}
      className={style.root}
    >
      <g>
        {U.mapElems(
          (it, i) => (
            <line key={`y-${i}`} x1={0} x2={'100%'} y1={it} y2={it} />
          ),
          yRange,
        )}
      </g>
      <g>
        {U.mapElems(
          (it, i) => (
            <line key={`x-${i}`} x1={it} x2={it} y1={0} y2={'100%'} />
          ),
          xRange,
        )}
      </g>
    </svg>
  );
}

export default PixelGrid;
