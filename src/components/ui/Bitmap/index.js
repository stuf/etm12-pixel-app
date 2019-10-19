/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module Bitmap
 * @namespace components.ui
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';

import * as T from './index.d';
import styles from './index.module.scss';

import { takeAll } from 'shared';
import { scaleSize, getContext } from 'common/canvas';
import { fstIn, sndIn } from 'common/meta';

/**
 * @param {T.Props} props
 */
function Bitmap({ size, className, scale, data, dom = U.variable() }) {
  const ctx = getContext(dom);

  const scaledSize = scaleSize(size, scale);

  const style = {
    width: fstIn(scaledSize),
    height: sndIn(scaledSize),
  };

  const imageData = U.thru(
    K.combine([data, size], takeAll),
    U.flatMapLatest(([ps, [w, h]]) =>
      !ps || !ps.length || ps.length % 4 !== 0
        ? K.constantError(new Error('image data invalid'))
        : new ImageData(new Uint8ClampedArray(ps), w, h),
    ),
  );

  const drawImageData = U.thru(
    imageData,
    U.flatMapLatest(v => U.combine([ctx, v], takeAll)),
    U.consume(([c, d]) => c.putImageData(d, 0, 0)),
  );

  //

  const effSink = U.sink(
    U.unless(R.isEmpty(data), U.parallel([drawImageData])),
  );

  return (
    <div className={U.cns(styles.root, className)}>
      {effSink}

      <canvas
        {...{
          style,
          className: styles.canvas,
          ref: U.refTo(dom),
          width: fstIn(size),
          height: sndIn(size),
        }}
      />
    </div>
  );
}

export default Bitmap;
