import * as React from 'karet';

import { fstIn, sndIn } from 'common/meta';

export default function OffsetGuide({ offset, size }) {
  const offsetLeft = fstIn(offset);
  const offsetTop = sndIn(offset);

  return (
    <div
      className="core-canvas__guide"
      style={{
        width: offsetLeft,
        height: offsetTop,
      }}
    >
      <div className="core-canvas__offsetGuide -y">{offsetLeft}</div>
      <div className="core-canvas__offsetGuide -x">{offsetTop}</div>
    </div>
  );
}
