import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';
import { mouseEventsFor } from 'core/mouse';

import styles from './index.module.scss';

import { offsetIn, fstIn, sndIn } from 'common/meta';
import { elementOffsetFor } from 'common/position';
import { scaleSize } from 'common/canvas';

import Bitmap from 'components/ui/Bitmap';
import Drawable from './_/Drawable';
import PixelGrid from './_/PixelGrid';

export default function Canvas({ size, scale, data, drawable }) {
  /** @type {ObsElement>} */
  const dom = U.variable();

  const { offset, bbox } = U.destructure(drawable);

  const domOffset = elementOffsetFor(dom);
  const scaledSize = scaleSize(size, scale);

  const bus = U.bus();

  return (
    <div
      className={styles.root}
      ref={U.refTo(dom)}
      style={{
        width: fstIn(scaledSize),
        height: sndIn(scaledSize),
      }}
    >
      <Drawable offset={offset} bbox={bbox} bus={bus} />
      <PixelGrid size={size} scale={scale} />
      <Bitmap size={size} scale={scale} data={data} />
    </div>
  );
}

//

/**
 * @typedef {K.Property<HTMLElement, any>} ObsElement
 */
