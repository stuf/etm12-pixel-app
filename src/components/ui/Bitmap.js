/* eslint no-unused-vars: [1, {"varsIgnorePattern": "[K|T|Model]"}] */
/**
 * @module Bitmap
 * @namespace components.ui
 */
import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as K from 'kefir';

import { takeAll } from 'shared';
import { scaleSize, getContext } from 'common/canvas';
import { fstIn, sndIn } from 'common/meta';

function Bitmap({ size, className, scale, data, domRef = U.variable() }) {
  const ctx = getContext(domRef);

  const scaledSize = scaleSize(size, scale);

  const style = {
    width: fstIn(scaledSize),
    height: sndIn(scaledSize),
  };

  const imageData = U.thru(
    K.combine([data, size], takeAll),
    U.toProperty,
    U.flatMapLatest(([pixels, [w, h]]) => {
      const xs = new Uint8ClampedArray(pixels);
      try {
        return new ImageData(xs, w, h);
      } catch (e) {
        console.log({ e, xs });
        return { e, xs };
      }
    }),
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
    <div className={U.cns('bitmap', className)}>
      {effSink}

      <canvas
        {...{
          style,
          className: 'bitmap__canvas',
          ref: U.refTo(domRef),
          width: fstIn(size),
          height: sndIn(size),
        }}
      />
    </div>
  );
}

export default Bitmap;
