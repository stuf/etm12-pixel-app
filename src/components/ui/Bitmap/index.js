/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module Bitmap
 * @namespace components
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';

import * as T from './index.d';
import styles from './index.module.scss';

import { takeAll, scaleSize, fstOf, sndOf, getContext } from '../../../shared';

/**
 *
 * @param {T.Props} props
 */
function Bitmap({ size, scale, data }) {
  const dom = U.variable();
  const ctx = getContext(dom);

  const scaledSize = scaleSize(size, scale);

  const style = {
    width: fstOf(scaledSize),
    height: sndOf(scaledSize),
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

  const effSink = U.sink(U.parallel([drawImageData]));

  return (
    <div className={styles.root}>
      <>{effSink}</>
      <div>
        {U.thru(
          U.combine([fstOf(size), sndOf(size), scale], takeAll),
          U.mapValue(R.join(' x ')),
        )}
      </div>

      <canvas
        {...{
          className: styles.canvas,
          ref: U.refTo(dom),
          style,
          width: fstOf(size),
          height: sndOf(size),
        }}
      />
    </div>
  );
}

export default Bitmap;
