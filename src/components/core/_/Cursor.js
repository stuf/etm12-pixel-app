import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import { scalePositionWith, truncPosition } from 'common/position';
import { asPx } from 'common/util';

export default function Cursor({ pos, scale }) {
  const scaledPos = truncPosition(scalePositionWith(scale, pos));

  const cursorSize = R.add(1, scale);
  const tl = U.thru(scaledPos, R.map(asPx), R.join(','));

  return (
    <div
      className="core-canvas__cursor"
      style={{
        width: cursorSize,
        height: cursorSize,
        transform: U.string`translate(${tl})`,
      }}
    />
  );
}
