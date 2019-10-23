import * as React from 'karet';

import { fstIn, sndIn } from 'common/meta';

export default function OffsetGuide({ offset, size }) {
  return (
    <div
      className="core-canvas__guide"
      style={{
        width: fstIn(offset),
        height: sndIn(offset),
      }}
    >
      <div className="core-canvas__offsetGuide -y">{sndIn(offset)}</div>
      <div className="core-canvas__offsetGuide -x">{fstIn(offset)}</div>
    </div>
  );
}
